
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const button = document.getElementById("add-btn")


button.addEventListener("click", function(){
    if (inputBox.value===''){
        alert("I should wright something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = '';
})
