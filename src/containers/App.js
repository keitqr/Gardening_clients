// App.js
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import AddNewClient from "../components/AddNewClient";
import AddClientForm from "../components/AddClientForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      filteredClients: [],
      searchField: "",
      showForm: false,
      showHeading: true,
      displayedNotes: "",
    };
  }

  componentDidMount() {
    this.fetchClients();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.clients !== this.state.clients ||
      prevState.searchField !== this.state.searchField
    ) {
      this.filterClients();
    }
  }

  fetchClients() {
    fetch("http://localhost:8000/clients")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched clients:", data.clients);
        if (data.success) {
          this.setState({ clients: data.clients });
        }
      })
      .catch((error) => {
        console.error("Error retrieving clients:", error);
      });
  }

  filterClients() {
    const { clients, searchField } = this.state;
    const filteredClients = clients.filter((client) => {
      return client.name.toLowerCase().includes(searchField.toLowerCase());
    });
    this.setState({ filteredClients });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  handleAddClientClick = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
      showHeading: false,
    }));
  };

  handleAddClient = (newClient) => {
    console.log("New client:", newClient);

    fetch("http://localhost:8000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);

        if (data.success) {
          const { client } = data;
          console.log("Received client:", client);

          this.setState((prevState) => ({
            clients: [...prevState.clients, client],
            showForm: false,
            showHeading: true,
          }));
        }
      })
      .catch((error) => {
        console.error("Error registering client:", error);
      });
  };

  handleViewNotes = (clientId) => {
    fetch(`http://localhost:8000/notes/${clientId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const { notes } = data;
          this.setState({ displayedNotes: notes });
        }
      })
      .catch((error) => {
        console.error('Error retrieving client notes:', error);
      });
  };
  
  

  render() {
    const {
      clients,
      filteredClients,
      searchField,
      showForm,
      showHeading,
      displayedNotes,
    } = this.state;

    return (
      <div className="container tc">
        {showHeading && <h1 className="f1">Clients List</h1>}
        {!showForm && (
          <AddNewClient handleClick={this.handleAddClientClick} />
        )}
        {showForm ? (
          <AddClientForm
            handleAddClient={this.handleAddClient}
            handleFormCancel={() =>
              this.setState({ showForm: false, showHeading: true })
            }
          />
        ) : (
          <>
            <SearchBox searchChange={this.onSearchChange} />
            {displayedNotes && (
              <p>Notes: {displayedNotes}</p>
            )}
            <Scroll>
              <CardList
                 clients={filteredClients}
                 handleViewNotes={this.handleViewNotes}
                 displayedNotes={this.state.displayedNotes}
              />
            </Scroll>
          </>
        )}
      </div>
    );
  }
}

export default App;
