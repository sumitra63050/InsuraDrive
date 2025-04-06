// Add your JavaScript functionality here
// For example, sending an invite email when the button is clicked.

document.getElementById('send-invite').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        // Send the invite email using your backend API or email service
        // Example:
        // fetch('/send-invite', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: email })
        // })
        // .then(response => {
        //     if (response.ok) {
        //         alert('Invite sent successfully!');
        //     } else {
        //         alert('Failed to send invite.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Error sending invite:', error);
        //     alert('Failed to send invite.');
        // });
        alert('Invite sent to ' + email); // Replace with your actual implementation
    } else {
        alert('Please enter an email address.');
    }
});