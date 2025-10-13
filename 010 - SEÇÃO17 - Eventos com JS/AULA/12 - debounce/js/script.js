let timeout

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout)
    timeout = this.setTimeout(function(){
        console.log(e.x)
    }, 500)
})