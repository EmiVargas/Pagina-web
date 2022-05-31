var btn_delete = document.getElementById('delete-btn');
var btn_resume = document.getElementById('resume-btn');
var result = document.getElementById('result');
var quantity = document.getElementById('quantity');
const standard_price = 200;

btn_resume.addEventListener('click', function(event) {
    var category = document.getElementById('select-category');
    console.log(category.value);
    if(category.value == 'Estudiante') {
        result.textContent = "Total a pagar: $ " + (standard_price * quantity.value *0.2);
    }
    if(category.value == 'Trainee') {
        result.textContent = "Total a pagar: $ " + (standard_price * quantity.value * 0.5);
    }
    if(category.value == 'Junior') {
        result.textContent = "Total a pagar: $ " + (standard_price * quantity.value * 0.85);
    }
    if(category.value == '0'){
        result.textContent = "Por favor selecciona una categoría";
    }
});



