import './style.css'

const equalOperator= document.getElementById("equalOperator")

const operands=document.getElementById("operands")

const result =document.getElementById("result")

const allBtn=document.querySelectorAll("#btn")

// allBtn.forEach(btn => {
//     console.log(btn)
// })

const btnCon=document.querySelector(".btnCon")

btnCon.addEventListener("click", (e) => {
    const txt = e.target.closest("button").textContent
    if(txt === "C"){
        operands.innerHTML=operands.innerHTML.slice(0,-1)
    }else if(txt === "="){
        operands.style.visibility="hidden"
        result.style.fontSize = "50px"
    }else if(txt === "x"){
        operands.innerHTML += "*"
    }
    else{
        if(txt){
            operands.style.visibility="visible"
            result.style.fontSize = "36px"
            operands.innerHTML += txt
        }
    }

    calculate(operands.innerHTML);

})


equalOperator.addEventListener("click", (e) => {
    
})


function calculate(txt){
    try {
        const val = eval(txt);
        console.log("Result:", val);
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

