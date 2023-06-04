// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all the submit buttons
    var submitButtons = document.querySelectorAll('.notes-submit');
  
    // Attach event listener to each submit button
    submitButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Find the corresponding textarea and its value
        var textarea = this.previousElementSibling;
        var notes = textarea.value;
  
        // Make an HTTP request to your backend server to save the notes
        // You'll need to replace the URL with your own server endpoint
        var url = '/save-notes';
        var data = { notes: notes };
  
        // Assuming you're using the fetch API
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(function(response) {
          // Handle the response as needed
          console.log('Notes saved successfully!');
        })
        .catch(function(error) {
          console.error('Error saving notes:', error);
        });
      });
    });
  });
  