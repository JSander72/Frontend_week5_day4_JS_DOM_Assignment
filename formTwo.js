document.getElementById('myFormTwo').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const formData = new FormData(event.target);
    const formObject = {};
    let allFieldsFilled = true;

    
    const requiredFields = ['name', 'email', 'message'];

    formData.forEach((value, key) => {
        formObject[key] = value;
        if (!value && requiredFields.includes(key)) {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert('Please fill in all required fields: name, email, and message.');
        return;
    }

    
    const formArray = [];
    formArray.push(formObject);

    
    console.log('Form Data as Object:', formObject);
    console.log('Form Data as Array:', formArray);

    
    const messageElement = document.createElement('p');
    messageElement.textContent = 'Form submitted successfully!';
    document.body.appendChild(messageElement);
});