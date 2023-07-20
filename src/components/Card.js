// Card.js

import React, { useState } from 'react';
import './Card.css';

const Card = ({ clientId, name, phoneNumber, address, notes, handleViewNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputNotes, setInputNotes] = useState(""); // Set it to an empty string
  const toggleEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleSaveNotes = () => {
    setIsEditing(false);
    handleViewNotes(inputNotes);
    
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientId, notes: inputNotes }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
        // Handle the response if needed
      })
      .catch((error) => {
        console.error("Error updating notes:", error);
        // Handle the error if needed
      });
  
    setInputNotes(""); // Reset the inputNotes state to an empty string
  };
  
  
  

  return (
    <div className="tc dib">
      <ul className="cards">
        <div className="card">
        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHCA0HBw0HBwcHBw0HBwcHBw8IDQcNFREWFhURExMYHSggGCYxGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRktKzctLSsrKy0rLSs3NzcrLTcrKysrLSsrKys3LSsrKysrLS0tLS0rLS0tKystLSsrK//AABEIALwBDAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAACAwEABwYF/8QAFhABAQEAAAAAAAAAAAAAAAAAAQAR/8QAGQEBAQEBAQEAAAAAAAAAAAAAAgABAwYF/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD8HLsll2X23xNDLsll2U3QyzJ5ZlN0MsyeXZTdTyzJ5YlN0EsyeWJRSp5Yk0sbS0EilRIpTZU0sSaWJRyppZNIpRSgkUqMUtKVNIpUSKUUBizSLRwEi1GLaUqbFqJFKOJpFmljRRNsmxo4+zyzJ5dlzed0MsyeXZTdTy7J5ZlN0MsyeWJa3QyKTyzKLQyxJpYlN1NLEmliUUqaWJNIpaWgliTSKUUoJFmliUcqbFKiRbSgJFJsUopQSLNilHAYs2KUUBizYtpwGLNi0cBjNjRSvtssyeXZc3nNDLMnlmU3QyzJ5ZlN0MsSeWZTdDIpUSKUWgliTSOWlKCRSokUopQSKVEi0UqaWJNItpSgkWokUopU0i1EilHE7GbFtKAwaiRSjlTSNRg0cFg1GLRRNizYtpwGLNjRx9zlmTy7Lm81qeWZUyzKWp5dk0syi1PLEnliU2UEilRIpRSgkUqJFKKVNLEmkUtKUEilRItHASKTYpRSgxSbFtOAxSowaKAxZsUo4DFmxbSgMWbFo4DFmxaOAwajBtOAxmxo4+7y7J5ZlyeX0MsyeWZa3QyxJpYlFqaWZUSKUWhkUmljTZU0sSaRSjlBilRItFKm2JNItpygkWbFooDFmxaOUGLNi2lAYNRi0cTYs2LRwGLNi2nAYs2DRwWDNi0UBjNjacffZdk8sy5PLaGWJPLEpuppYk0sSi0Eik0sbSlTSxJpFKKUEik0saKVNIpUSKUcqaRaiQaOAxZtjacTYs2LRQGLNi2nAYs2LRxNizYtHAYs2LacBgzYtHAYs2LRQGM2Npx6DlmVMsy5PKanlmTSzKLQSKVEilNlTSxJpFKOUGKTbG0pU0ilRINHASLNi0UBizYtHAYs2LacBgzYtHAYs2LRwGLNi2nE2LNi0cBiyYtpQGLNi06QGLJi0UBjNjacei5Zk8sS4vJaCRSpkUopU0sSaWJaUqaRSokWilTYtRIJRwGKTYtpwGDUYtHE2LNi0cBizYNHAYs2LacBizYNHAYs2LacBizYNHAYs2LRwGDNi2nAYsmLRwWMmNpR6RlmTSzLi8hKCRSokUopU0ilRIpRypsWaRbTgJFmxaKJsWbFtOAwajBo4DFmxaOAwZsWnSAxZMW04DFmxaOAwZsW04DFmwaOAxZsGjgsWTFtOAxZsGjgsGbGjj0xIpUSKXF42VNizSLacBItRg0cBg1GDacBizYNHAYs2DRwWDNi2nAYM2LTpAYM2LRwGLNg2nAYs2LRwGDNi0cBizYNpwGLNg0cFgzYtpwGDNi06QGMmyij05i1GDcXjIDFmwadIDFmwbTgMWbBo4LBmwbTgsGbBp0gsGbBtOCwZsGjgsGbFo4DBmxbXSAxZMWjgMWbBo4LBmxbTgMGbFo4DFkxbTgMWTFo4DZJjRx6gxZMW4vGQGDNi0cBiyYtrpAYsmLRwGLJi2nAYM2DRwWLJg2ukFiyYNHBYsmLRwGLJi2nBYMmLTpBYM2DRwWLJi2nAYsmLRwGLJi2nBYMmLRwWMmNHH//2Q==' 
          className="card__image" 
          alt=""  />  

          <div className="card__overlay">
            <div className="card__header center">
              <div className="card__header-text center">
                <h3 className="card__title">{name}</h3>
                <p className="card__status">Phone: {phoneNumber}</p>
                <p className="card__status">Address: {address}</p>
              </div>
            </div>
            {isEditing ? (
              <div>
                <textarea
                  className="card__notes-input"
                  value={inputNotes}
                  onChange={event => setInputNotes(event.target.value)}
                ></textarea>
                <button className="glow-on-hover" onClick={handleSaveNotes}>
                  Save Notes
                </button>
              </div>
            ) : (
              <div>
                <button className="glow-on-hover" onClick={toggleEditing}>
                  Add Notes
                </button>
                <button
                  className="glow-on-hover"
                  onClick={() => handleViewNotes(name)}
                >
                  View Notes
                </button>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Card;





        