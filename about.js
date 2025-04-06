document.addEventListener("DOMContentLoaded", function () {
    console.log("DriveInsure AI Page Loaded Successfully!");

    // Learn More Button Functionality
    const learnBtn = document.querySelector(".learn-btn");
    if (learnBtn) {
        learnBtn.addEventListener("click", function () {
            alert("More features coming soon!");
        });
    }

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

    // Performance Insights Bar Width Logic
    const insightBars = document.querySelectorAll(".insight .bar");
    insightBars.forEach(bar => {
        if (bar.classList.contains("green")) {
            bar.style.width = "80%";
        } else if (bar.classList.contains("yellow")) {
            bar.style.width = "60%";
        } else if (bar.classList.contains("red")) {
            bar.style.width = "40%";
        } else if (bar.classList.contains("orange")) {
            bar.style.width = "70%";
        }
    });

    // Dummy Graph data
    const graphContainer = document.querySelector(".graph-container");
    if (graphContainer){
        graphContainer.innerHTML = `<p style="text-align: center; margin-top: 50px;">Graph Data Coming Soon.</p>`;
    }
});