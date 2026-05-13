const tips = [
    "Drink at least 8 glasses of water a day to stay hydrated.",
    "Take a 20-second break to look at something 20 feet away every 20 minutes.",
    "Incorporate more leafy greens into your daily meals.",
    "Get at least 30 minutes of moderate exercise every day."
];

function showRandomTip() {
    const tipElement = document.getElementById('tip-text');
    if(tipElement) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipElement.textContent = tips[randomIndex];
    }
}
window.onload = showRandomTip;

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields (Name, Email, Phone).");
        return false;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    alert("Thank you! Your appointment request has been submitted successfully.");
    return true;
}