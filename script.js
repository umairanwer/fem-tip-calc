var bill = 0;
var tipPc = 5;
var numPeople = 1;

//event listener on tip buttons
document.querySelectorAll(".tip-selectors button")
.forEach((btn) => {
    btn.addEventListener('click', tipClick);
})

document.querySelector("#bill")
    .addEventListener("input", (e) =>{
        bill = e.target.value;
        updateTip();
    })
document.querySelector("#custom-tip")
.addEventListener("input", (e) => {
    clearBtns();
    tipPc = e.target.value;
    e.target.value = e.target.value;
    updateTip();
});

//check for error in num of people
document.querySelector("#num-people")
    .addEventListener("input", (e) => {
        var errorMsg = document.querySelector(".zero-error");
        if(e.target.value > 0){
            errorMsg.style.display = 'none';
            numPeople = e.target.value;
            document.querySelector("#num-people").style.border = 'none';
            updateTip();
        }
        else{
            errorMsg.style.display = 'block';
            document.querySelector("#num-people").style.border = "orange 2px solid";
        }
    });

document.querySelector(".reset-btn")
    .addEventListener("click", resetAll);

function tipClick(e){
    //turn off other active buttons
    clearBtns();
    document.querySelector("#custom-tip").value = "";

    //set clicked button as active
    e.target.classList.add("activeBtn");
    tipPc = e.target.value;

    updateTip();
}

function clearBtns(){
    document.querySelectorAll(".tip-selectors button")
        .forEach((btn)=>{
            btn.classList.remove("activeBtn");
    });

}

function updateTip(){
    document.querySelector("#tip-value")
        .textContent = "$"+(bill/numPeople * tipPc/100).toFixed(2);
    document.querySelector("#total-value")
        .textContent = "$"+(bill/numPeople * (1+tipPc/100)).toFixed(2);
}

function resetAll(e){
    document.querySelector("#bill").value = "";
    document.querySelector("#num-people").value = "1";
    clearBtns();
    document.querySelector("#five-pc").classList.add("activeBtn");
    document.querySelector("#tip-value")
        .textContent = "$0.00";
    document.querySelector("#total-value")
        .textContent = "$0.00"
}