document.getElementById('quoteForm').addEventListener('submit', function(event) {
    // Form validation logic
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Please fill in all required fields correctly.");
    }
}, false);
