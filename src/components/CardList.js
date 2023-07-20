import React from 'react';
import Card from './Card';

const CardList = ({ clients, handleViewNotes }) => {
  return (
    <div>
      {
        clients.map((client) => (
          <Card
            key={client.id}
            name={client.name}
            phoneNumber={client.phone}
            address={client.address}
            notes={client.notes}
            handleViewNotes={handleViewNotes}
            clientId={client.id} // Pass the clientId as a prop
          />
        ))
      }
    </div>
  );
};


export default CardList;
