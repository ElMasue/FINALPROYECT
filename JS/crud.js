function saveProduct() {
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;
    const productDescription = document.getElementById("product-description").value;

    if (!productName || !productPrice || !productDescription) {
        alert("Please fill all fields.");
        return;
    }

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    window.location.href = "showdata.html";
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        productList.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>
                    <button class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editProduct(index) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products[index];

    document.getElementById("product-name").value = product.name;
    document.getElementById("product-price").value = product.price;
    document.getElementById("product-description").value = product.description;

    document.getElementById("edit-product-form").style.display = "block";

    const saveButton = document.getElementById("save-button");
    saveButton.textContent = "Actualizar Producto";

    const form = document.getElementById("product-form");
    form.onsubmit = function(event) {
        event.preventDefault();

        product.name = document.getElementById("product-name").value;
        product.price = document.getElementById("product-price").value;
        product.description = document.getElementById("product-description").value;

        products[index] = product;
        localStorage.setItem("products", JSON.stringify(products));

        loadProducts();
        document.getElementById("edit-product-form").style.display = "none";
    };
}

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));

    loadProducts();
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("product-list")) {
        loadProducts();
    }

    if (document.getElementById("product-form")) {
        const form = document.getElementById("product-form");
        form.onsubmit = function(event) {
            event.preventDefault();
            saveProduct();
        };
    }
});
