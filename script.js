let dec =document.getElementById("decBtn")
let res = document.getElementById("res")
let inr = document.getElementById("inrBtn")
console.log(dec,inr)

let cou = 0;

dec.addEventListener("click",function(){
    if(cou>0){
        cou--;
        res.innerText = cou;
    }
    
})

inr.addEventListener("click",function(){
    cou++;
    res.innerText = cou;
})

