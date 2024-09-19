document.getElementById('checkAvailability').addEventListener('click', function() {
    const availabilityMessage = document.getElementById('availabilityMessage');
    availabilityMessage.textContent = "Checking availability...";
    
    // Simulate a delay for checking availability
    setTimeout(function() {
        availabilityMessage.textContent = "Room is available!";
    }, 2000);
});
