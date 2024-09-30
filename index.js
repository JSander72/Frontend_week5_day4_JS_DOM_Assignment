let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(products, listElement, showDetails = false) {
    listElement.innerHTML = 'myList'; 

    for (const product of products) {
        const li = document.createElement("li");

        if (showDetails) {
            li.textContent = `${product.name} - $${product.price.toFixed(2)}: ${product.description}`;
        } else {
            li.textContent = product.name; 
        }

        listElement.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    const list = document.getElementById("myList");
    const searchBox = document.getElementById('searchBox'); 

   
    displayProducts(products); 

    if (form) { 
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            list.style.display = "block"; 
        });
    } else {
        console.error("Form with ID 'myForm' not found.");
    }

    if (searchBox) {
        searchBox.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();

            
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );

            
            displayProducts(filteredProducts, list, searchTerm !== ''); 
        });
    } else {
        console.error("Search box with ID 'searchBox' not found.");
    }

    document.getElementById("handleSubmit").addEventListener("click", () => {
        const productName = document.getElementById("productName").value;
        

        if (productName) {
            products.push({ name: productName, price: parseFloat(productPrice), description: productDescription });
            displayProducts(products, list);
        } else {
            alert("Please fill out all fields.");
        }
    });
});