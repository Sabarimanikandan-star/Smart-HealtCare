document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form data
    const patientName = document.getElementById('patientName').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const reason = document.getElementById('reason').value;

    // Create the booking object
    const booking = {
        patientName: patientName,
        doctor: doctor,
        appointmentDate: appointmentDate,
        reason: reason
    };

    // Send booking data to the backend API
    fetch('http://localhost:8082/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
    })
    .then(response => response.json())
    .then(data => {
        // Show success message in alert
        alert('Appointment successfully booked!');
        document.getElementById('appointmentForm').reset();  // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});




function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (ensure both fields are filled)
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Storing username and password temporarily in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Show success message
    alert("Login successful!");

    // Optionally log the stored data for inspection (this could be done in the console or on the page)
    console.log("Stored Username: ", localStorage.getItem("username"));
    console.log("Stored Password: ", localStorage.getItem("password"));
}

function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation (can be expanded later)
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Simulate a registration process (this can be replaced with a backend API later)
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to the login page
}
