function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'usuario' && password === 'contraseña') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('calculator').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? (num1 / num2) : 'Error';
            break;
    }

    document.getElementById('result').textContent = result;
}
