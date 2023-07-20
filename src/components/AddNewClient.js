import React from 'react';
import "./AddNewClient.css"

const AddNewClient = ({ handleClick }) => { // Receive the prop as handleClick
  return (
    <div className="tc pa2">
      <div class="buffer col-12"></div>
      <section class="text-center col-12">
        <button class="btn btn-primary btn-xl" onClick={handleClick}> Add Client </button> {/* Call the handleClick function when clicked */}
      </section>
    </div>
  );
};

export default AddNewClient;
