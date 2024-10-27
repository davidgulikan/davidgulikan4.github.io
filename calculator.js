document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultOutput = document.getElementById("result");

    function calculateTotal() {
        const quantity = quantityInput.value;
        const price = productSelect.value;
        const total = quantity * price;
        resultOutput.textContent = `Общая стоимость заказа: ${total}₽`;
    }

    calculateBtn.addEventListener("click", calculateTotal);
});
