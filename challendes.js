document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".challenge-box input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const parent = e.target.parentElement;
            if (e.target.checked) {
                parent.classList.add("completed");
                parent.innerHTML += ' <span class="status">Completed</span>';
            } else {
                parent.classList.remove("completed");
                parent.querySelector(".status")?.remove();
            }
        });
    });
});
