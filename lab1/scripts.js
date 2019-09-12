"use strict";

// Exercise 1.3

let passwords = ['qwerty', '1qaz2wsx'];

for (let pas in passwords) $('tbody').append(`
<tr><td>${passwords[pas]}</td></tr>
`)

$('#btn-add').click(() => {
    let value = $('#input-val-add').val();
    passwords.push(value);
    $('tbody').append(`<tr><td>${value}</td></tr>`);
});

$('#btn-checkout').click(() => {
    let value = $('#input-val-checkout').val();
    if(passwords.indexOf(`${value}`) != -1) $('#output-pas')
    .empty()
    .append(`
    <div class="alert alert-success" role="alert">
  Ваш пароль совпал с образцом.
</div>`);
    else $('#output-pas')
    .empty()
    .append(`
    <div class="alert alert-danger" role="alert">
  Ваш пароль не совпал с образцом.
</div>`);

});

// Exercise 1.4

$('#btn-num').click(() =>{
    let value = $('#input-calc').val();
    
    let numbers = value.split(' ').map(parseFloat);
    let res1 = numbers.reduce((sum, current) => sum + current);
    let res2 = numbers.reduce((mult, current) => mult * current);
    
    $('#output-num').empty().append(`
    Сумма:${res1} <br>
    Умножение: ${res2}
    `)
});

