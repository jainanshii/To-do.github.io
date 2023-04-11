let input=document.getElementById("to-do");
let submit=document.getElementById("submit");
let complete=document.getElementById("comp");
let incomplete=document.getElementById("incomp");
let add=document.getElementById("added");

let i=localStorage.length+1;
let p=sessionStorage.length+1;
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
   newp.setAttribute("id","content");
   newdiv.appendChild(space);
   newdiv.appendChild(newp);
   newdiv.appendChild(checkbox);
   newdiv.appendChild(dltbutton);
   localStorage.setItem(i,inp);
   sessionStorage.setItem(p,inp);
   add.innerText="Task Added!!"
 const a= setTimeout(()=>{
   add.innerText="Add new Task!!"}
  ,3000)
   i++;p++;
   input.value= "";
   incomplete.appendChild(newdiv);
   checkbox.addEventListener('change',taskcomplete);
   
  
}

function taskcomplete(){
    const check=this.parentNode;
    const box=this.previousElementSibling;
    this.checked=true;
    complete.appendChild(check);
    for(j=1;j<=sessionStorage.length+1;j++){
        const a=this.parentNode;
        if(sessionStorage.getItem(j)==n)
        continue;
        if(sessionStorage.getItem(j)==a.getElementsByTagName('p')[0].innerHTML){
            var n="*";
        sessionStorage.setItem(j,n);
       
        }
    }
    }


submit.addEventListener("click",appear);

function remove(){
    const dlt=this.parentNode;
    if(incomplete.contains(this))
    incomplete.removeChild(dlt);
    else
    complete.removeChild(dlt);
    for(j=1;j<=sessionStorage.length+1;j++){
        const a=this.parentNode;
        if(sessionStorage.getItem(j)==n)
        continue;
        if(sessionStorage.getItem(j)==a.getElementsByTagName('p')[0].innerHTML){
            var n="*";
        sessionStorage.setItem(j,n);
       
        }
    }
}

function completed(){
    let x=document.getElementById("comp");
    complete.style.display="block";
    let y=document.getElementById("co");
    y.style.display="block";
}
window.onload=(e)=>{
    const x=document.getElementById("incomp")
   x.style.display="block";
   
  for(var j=1;j<=sessionStorage.length+1;j++){
    for(var k=1;k<=localStorage.length;k++){
    if(sessionStorage.getItem(j)==(localStorage.getItem(k))){
        const space=document.createElement("span");
        const newdiv=document.createElement("div");
        const newp = document.createElement("p");
        const dltbutton=document.createElement("button");
        const checkbox=document.createElement("input");
        dltbutton.addEventListener("click",remove);
        checkbox.type="checkbox";
        space.innerText="";
        newp.innerText=sessionStorage.getItem(j);
        dltbutton.innerText="Delete";
        newdiv.setAttribute("id","card");
        newdiv.appendChild(space);
        newdiv.appendChild(newp);
        newdiv.appendChild(checkbox);
        newdiv.appendChild(dltbutton);  
        incomplete.appendChild(newdiv); 
        checkbox.addEventListener('change',taskcomplete);
        break;
    }
    else
    continue;
}
  }
}
