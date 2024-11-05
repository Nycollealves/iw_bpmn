function ingredientes(){

    let pd = [] //vetor
    let pc = [] //vetor

    //lista bolo
    pd[0] = "farinha"
    pd[1] = "ovos"
    pd[2] = "leite"
    pd[3]= "açúcar"

    //lista cobertura
    pc[0] = "chocolate"
    pc[1] = "creme de leite"
    pc[2] = "ovos"

    return pd + "\n" + pc
}

function receita(){

    const ingred = ingredientes()

    

}

function mistuiraMassa(ingredientes){

    for(let i=0;i<10000;i++){
        if( i == 7000){
            return "pronto"
        }

    }

}

function assar(tempo){
    let ingre = ingredientes()

    misturarMassa(ingre)



    for (let i=50000;i++){
        if(tempo == i){
            return "40 min terminou"
        }
    }
}

function forno(tempo){
    assar(tempo)
}




forno(40000)



//console.log(ingredientes())