function toggleProfile() {
    let profileDetails = document.getElementById("profileDetails");
    if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
        profileDetails.style.display = "block";
    } else {
        profileDetails.style.display = "none";
    }
}
