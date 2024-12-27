document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("dataForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let birthdate= document.getElementById("birthdate").value;

        // Send data to the server
        fetch('http://localhost:3001/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                birthdate: birthdate
            })
        })
        .then(response => response.json())
        .then(data => alert('Data saved successfully!'))
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while saving the data.');
        });
    });
});
