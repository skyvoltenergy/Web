// Add event listener to the form's submit button
document.querySelector('form button[type="submit"]').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(document.querySelector('form'));

    // Send the form data to the server using AJAX
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
