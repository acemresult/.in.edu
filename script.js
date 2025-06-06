// Function to sanitize user input
function sanitizeInput(input) {
// Remove harmful characters that could be used for XSS attacks
return input.replace(/[<>"'();&]/g, "");
}
// Function to view result with input validation and sanitization
function viewResult() {
const admission = sanitizeInput(document.getElementById("admission").value);
const semester = sanitizeInput(document.getElementById("semester").value);
const formContainer = document.getElementById("formContainer");
const resultContainer = document.getElementById("resultContainer");
const resultContent = document.getElementById("resultContent");
const invalidBox = document.getElementById("invalidBox");
// Basic validation to ensure both fields are filled
if (admission === "" || semester === "") {
alert("Please fill in all fields.");
return;
}
// Check for valid admission number
if (admission !== "230442") {
formContainer.style.display = "none";
invalidBox.style.display = "block";
return;
}
formContainer.style.display = "none";
resultContainer.style.display = "block";
// Semester result display based on the selected semester
if (semester === "1") {
resultContent.innerHTML = `<h3>Semester 1 Result</h3><img src="SEMS_1.jpg" alt="Semester 1 Result"/>`;
} else if (semester === "2") {
resultContent.innerHTML = `<h3>Semester 2 Result</h3><img src="SEMS_2.jpg" alt="Semester 2 Result"/>`;
} else {
resultContent.innerHTML = `<h3>Result Not Found</h3><p>No result found for Semester ${semester}.</p>`;
}
}
// Function to reset the form and navigate back
function goBack() {
// Show form and hide others
document.getElementById("formContainer").style.display = "block";
document.getElementById("invalidBox").style.display = "none";
document.getElementById("resultContainer").style.display = "none";
// Clear form fields
document.getElementById("admission").value = "";
document.getElementById("semester").value = "";
document.getElementById("roll").value = "";
}