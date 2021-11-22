function calcula_imc() {
    altura = document.imcform.altura.value
    peso = document.imcform.peso.value
    imc = (peso/(altura*altura))

    if(imc<18.5){
        alert("Você está abaixo do peso, índice:" + imc)
    }

    if(imc>=18.5 && imc<=24.99){
        alert("Você está com o peso ideal, índice:" + imc)
    }

    if(imc>=25 && imc<=29.99){
        alert("Você está com sobrepeso, índice:" + imc)
    }

    if(imc>=30 && imc<=39.99){
        alert("Você está com obesidade, índice:" + imc)
    }

    if(imc>40){
        alert("Você está com obesidade mórbida, índice:" + imc)
    }


}