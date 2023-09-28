/*Definición de función declarativa*/

function helloworld(){
    console.log('Hola mundo con funciones 👋')
}

helloworld();

/**
 * 
 * @param {*} age 
 */
function CheckAgeForMovie(age){
    if(age>= 13){
        console.log('Puedes ver la pelicula, edad adecuada')
    }else{
        console.warn('No puedes ver la pelicula, edad inadecuada')
    }
    
}

CheckAgeForMovie(20); 
/**
 * Como argumento se puede usar una variable ver 
 * el caso de var pepita
 */
var pepita = 15;
CheckAgeForMovie(pepita); 

/**
 * desarrollar una estructura de control para dos parametros
 */ 
var age= 120;

function CheckWatchMovie(age, hasticket){
    if(age>= 13 && hasticket===true){
        console.log('Puedes ver la pelicula, edad adecuada')
    }else{
        console.warn('No puedes ver la pelicula, edad inadecuada')
    }
}

CheckWatchMovie(50,true)