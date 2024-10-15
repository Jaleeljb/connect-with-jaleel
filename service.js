(function() {
    emailjs.init('service_8a0hp2p'); // Replace with your EmailJS user ID
})();
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send('', 'template_cnwnfu9', formData)
        .then(function(response) {
            alert('SUCCESS! Your message has been sent.', response.status, response.text);
        }, function(error) {
            alert('FAILED! Something went wrong.', error);
        });
});
