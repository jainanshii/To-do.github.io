let input=document.getElementById("to-do");
let submit=document.getElementById("submit");

let complete=document.getElementById("comp");
let incomplete=document.getElementById("incomp");
let add=document.getElementById("added");
let i=localStorage.length+1;
function appear(){
   let inp= input.value;
   const space=document.createElement("span");
   const newdiv=document.createElement("div");
   const newp = document.createElement("p");
   const dltbutton=document.createElement("button");
   const checkbox=document.createElement("input");
   dltbutton.addEventListener("click",remove);
   checkbox.type="checkbox";
   space.innerText="";
   newp.innerText=inp;
   dltbutton.innerText="Delete";
   newdiv.setAttribute("id","card");
   newdiv.appendChild(space);
   newdiv.appendChild(newp);
   newdiv.appendChild(checkbox);
   newdiv.appendChild(dltbutton);
   localStorage.setItem(i,inp);
   add.innerText="Task Added!!"
 const a= setTimeout(()=>{
   add.innerText="Add new Task!!"}
  ,3000)
   i++;
   input.value= "";
   incomplete.appendChild(newdiv);
   checkbox.addEventListener('change',taskcomplete);
   
  
}

function taskcomplete(){
    const check=this.parentNode;
    const box=this.previousElementSibling;
    this.checked=true;
    complete.appendChild(check);
    }


submit.addEventListener("click",appear);

function remove(){
    const dlt=this.parentNode;
    if(incomplete.contains(this))
    incomplete.removeChild(dlt);
    else
    complete.removeChild(dlt);
}
function incompleted(){
    const x=document.getElementById("incomp")
   x.style.display="block";
   
}
function completed(){
    let x=document.getElementById("comp");
    complete.style.display="block";
    let y=document.getElementById("co");
    y.style.display="block";
}


