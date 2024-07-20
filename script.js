const inpbox=document.getElementById("inpbox");
const listitem=document.getElementById("listitem");

function addTask(){
    console.log("clicked");
    if(inpbox.value===''){
        alert("BKL kuch toh likh");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inpbox.value;
        listitem.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inpbox.value="";
    save();
}
listitem.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            save()
        }else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            save();
        }
},false);

function save(){
    
    localStorage.setItem("data",listitem.innerHTML);
}
function disp(){
    listitem.innerHTML=localStorage.getItem("data");
}
disp();