const obj = {
    name: "juancito",
    surname: "perez",
    age: 24
}
function obtenerVal(obj){
    let contKeys= Object.keys(obj);
    let contValues = Object.values(obj);
    let resultado = "";
    for(let i = 0; i< contKeys.length; i++){
        resultado = resultado + contKeys[i];
        resultado = resultado + ": ";
        resultado = resultado + contValues[i];
        if(i<contKeys.length-1){
            resultado = resultado + ", ";
        }
    }
    return resultado;
}

   