

    // Feedback Form Submission Handling
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            alert("✅ Feedback Submitted Successfully!");

            // Clear form fields after submission
            feedbackForm.reset();
        });
    }

    