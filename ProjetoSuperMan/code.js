function ingrediente(status){

    return status
}

function massa(receberIngredientes){

    if(receberingredientes == true){
        return "receita carregada"
    }

}

//////console.log(massa(ingredientes(true)))






///////------- Minhas Classes

function ligar(status){

    return status
}
function ventilador(verificar){

    if(verificar==true){
        return "funcionando"
    }
    else{
        return "desligado"
    }
}

//console.log(ventilador(ligar(true)))
////--------------------------------

function movimento(status){
    return status
}
function elevador(verificar, andar){


    if(verificar==true){
        return "funcionando"
    }


    for (let i=0;i<5;i++){
        if(andar == i){
            return "abre portas"
        }
     else{
        return "desligado"
    }
}

console.log(computador(ligar(true)))

