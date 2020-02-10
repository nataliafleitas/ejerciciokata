//function Multiplicando (lista){
 //let listaduplicada=[];
 //    for(let i=0 ; i < lista.length ;i++){
 //    listaduplicada[i]=lista[i] * 2;
    
 //}
 //return listaduplicada;
 //}
 function fechas (lista){
    let resultado = 0;
    let posicion = 0;
    
    while (posicion < lista.length) {
     
      if(posicion === lista.length -1){
        resultado = resultado + lista[posicion];
      }else{
        resultado = resultado + lista[posicion] + '-';
      }
      posicion++;
    }
    
    return resultado;
    
   }
   

 