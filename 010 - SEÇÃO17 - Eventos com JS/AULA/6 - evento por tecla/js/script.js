window.addEventListener("keydown", function(){
    if(e.key == 'q'){
        console.log('Apertou a letra ')
    } /*else if(e.key == "Enter"){
        console.log("Apertou enter")
    }*/
})

window.addEventListener("keyup", function(){

    if(e.key == "Enter"){
        console.log("Soltou o enter")
    }
})