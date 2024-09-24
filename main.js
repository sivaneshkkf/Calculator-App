import './style.css'

const equalOperator= document.getElementById("equalOperator")

const operands=document.getElementById("operands")

const result =document.getElementById("result")

const allBtn=document.querySelectorAll("button")

// allBtn.forEach(btn => {
//     console.log(btn)
// })

const btnCon=document.querySelector(".btnCon")

btnCon.addEventListener("click", (e) => {
    const txt = e.target.closest("button").textContent
    if(txt === "C"){
        operands.innerHTML="";
        calculate();
    }else if(txt === "="){
        operands.innerHTML = "";
        result.style.fontSize = "50px"
    }else if(txt === "x"){
        operands.innerHTML += "*"
        calculate();
    }
    else{
        if(txt){
            result.style.fontSize = "36px"
            operands.innerHTML += txt
            calculate();
        }
    }

})


equalOperator.addEventListener("click", (e) => {
    
})

const numPattern = /^[0-9+\-*/=.()]*$/;
document.addEventListener("keydown", (e) => {

    e.preventDefault();

    //console.log(e.key);
    
    result.style.fontSize = "36px"

    if(numPattern.test(e.key)){
        operands.innerHTML += e.key;
        keyCheck(e.key)
        calculate();
    }
    
    if(e.key == "Backspace"){
        operands.innerHTML = operands.innerHTML.slice(0,-1)
        keyCheck(e.key)
        calculate();
    }
    if(e.key == "Enter"){
        operands.innerHTML="";
        result.style.fontSize = "50px"
        keyCheck(e.key)
    }
    
})


function calculate(){
    try {
        const val = eval(operands.innerHTML);
        if(val){
            result.innerHTML = val
        }else{
            result.innerHTML = "0"
        }
        operands.style.color="#71717a"
    } catch (error) {
        console.error("Error evaluating expression:", error.message);
        operands.style.color="#ef4444"
    }
 
}



function keyCheck(key){
    allBtn.forEach(btn => {

        if(key == "*"){
            key="x";
           
        }else if(key == "Enter"){
            key="="
            
        }else if(key == "Backspace"){
            key="C"
        }
        
        if(btn.innerText.trim() === key) {
            
            if(key == "C"){
                setTimeOut(btn,"c","cPress")
            }else if(key == "="){
                setTimeOut(btn,"equals","equalsPress")
            }else if(btn.classList.contains("numBtn") || btn.classList.contains("numBtnPress")){
                setTimeOut(btn,"numBtn","numBtnPress")

            }else{
                setTimeOut(btn,"operatorBtn","operatorBtnPress")
            }
         
            
        }
        
        
    })
}

function setTimeOut(btn,normal,press){
    btn.classList.remove(normal);
    btn.classList.add(press);
    setTimeout(() => {
        btn.classList.add(normal);
        btn.classList.remove(press);
    }, 200);
}
