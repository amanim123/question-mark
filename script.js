for(let i = 1; i<22; i++){
    let code
    if(i < 10){
        code = `<a href="./0${i}"><div class="box">Day 0${i}</div>`
    }else{
        code = `<a href="./${i}"><div class="box">Day ${i}</div>`
    }
    document.querySelector(".container").innerHTML += code
}