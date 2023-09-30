let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
function Add(){
    if(inputs.value == ""){
        alert("Please Enter list item")
    }
    else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa fa-remove"></i>`;
        text.appendChild(newEle); 
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
}