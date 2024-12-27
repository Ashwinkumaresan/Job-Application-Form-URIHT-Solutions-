// Variable declaration
var name_ = document.getElementById("name");
var num = document.getElementById("number");
var email = document.getElementById("email");
var address_ = document.getElementById("address");
var options_ = document.getElementById("options");
var btn = document.getElementById("button");
var lab = document.getElementsByClassName("label");
var lab_change_ = document.getElementById("lab_change");
var lab_change_2 = document.getElementById("lab_change2");
var lab_change_3 = document.getElementById("lab_change3");
var lab_change_4 = document.getElementById("lab_change4");
var selection = document.getElementsByClassName("selection_box");



// For the number field
num.addEventListener('input', () => {
    sessionStorage.setItem("Phone number", num.value); // Set the number to the session storage

    const phoneInput = event.target;
    const onlyNumbers = phoneInput.value.replace(/\D/g, ""); // Remove non-numeric characters
    phoneInput.value = onlyNumbers; // Update input with only digits

    // Validation for numbers
    if(num.value.length === 10){
        num.style.borderColor = "Green"
        lab_change_.style.backgroundColor = "green"
    }
    else{
        num.style.borderBlockColor = "#ff005d "
    }
})

// For the name filed
name_.addEventListener('input', () =>{
    sessionStorage.setItem("Name", name_.value); // Set the name to the session storage

    const nameInput = event.target;
    const validName = nameInput.value.replace(/[^A-Za-z\s-]/g, ""); // Remove non-alphabetic characters
    nameInput.value = validName; // Update input with only alphabetic characters

    // Validation for name
    if(name_.value.length > 0){
        name_.style.borderColor = "Green";
        lab_change_2.style.backgroundColor = "green"
    }
    else{
        name_.style.borderColor = "#ff005d"
        lab_change_2.style.backgroundColor = "#ff005d"
    }
})

// For the email field
email.addEventListener('input', () => {
    sessionStorage.setItem("Email", email.value); // Set the email to the session storage

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation for email
    if (email.value.length > 0 && emailRegex.test(email.value)) {
        email.style.borderColor = "Green";
        lab_change_3.style.backgroundColor = "green";
    } else {
        email.style.borderColor = "#ff005d";
        lab_change_3.style.backgroundColor = "#ff005d";
    }
});


// For the address field
address_.addEventListener('input', () =>{
    sessionStorage.setItem("Address", address_.value); // Set the address to the session storage

    // Validation for address
    if(address_.value.length > 0){
        address_.style.borderColor = "Green"
        lab_change_4.style.backgroundColor = "green"
    }
    else{
        address_.style.borderColor = "#ff005d"
        lab_change_4.style.backgroundColor = "#ff005d"
    }
})

// For the postion and resume or CVs field
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    sessionStorage.setItem("Job position", options_.value); // Set the position to the session storage

    const fileInput = document.getElementById("resume").files[0];
    if (fileInput){
        const reader = new FileReader();
        
        // Read the file as a data URL
        reader.readAsDataURL(fileInput);
        
        reader.onload = function() {
            // Store the file data in session storage
            sessionStorage.setItem("Resume", reader.result);
        };

        reader.onerror = function() {
            console.error("Error reading file:", reader.error);
        };
    } 
    else{
        alert("Please select a file before submitting.");
    }
});

// Button
const registered= ()=>{
    if(
        document.getElementById("name").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("number").value.length > 0 &&
        document.getElementById("address").value.length > 0 &&
        document.getElementById("options").value.length > 0 &&
        document.getElementById("resume").value.length > 0
    ){
        const page = document.getElementsByClassName("registerd_container")
    page[0].style.display = "flex"
    }
    else{
        alert("Please fill all the fields")
    }
}
