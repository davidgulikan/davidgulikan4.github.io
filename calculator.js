function calculateTotal() {
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("product").value;
    const total = quantity * price;
    document.getElementById("result").textContent = `Общая стоимость заказа: ${total}₽`;
}