function factorial(n){

    let resultado = 1

    for(let i=1; i<=n; i++){
        resultado *=i;
        }
        return resultado;
}

function calcularFactorial(){
    let n = document.getElementById("numero").value
    if(isNaN(n)){
        document.getElementById("resultado".innerText)=
        "Introduce un número válido "
        return;
    }

    n = Math.abs(n);
    
    let resultado = factorial(n)
    document.getElementById("resultado").innerText =
    `Factorial de ${n} = ${resultado}`;
}