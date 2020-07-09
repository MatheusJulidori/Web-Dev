var i = 0;

function action() {
    if(i === 0){
        alert("DO NOT CLICK HERE!")
    }
    else if(i===1){
        alert("CLICK ONCE MORE AND I'LL CLOSE YOU")
    }
    else{
        close()
    }
    console.log(i)
    i++
}