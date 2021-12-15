let textbox=document.getElementById("textbox1");
let box1=document.getElementById('todolist');
let box2=document.getElementById('pendinglist');
let box3=document.getElementById('donelist');
let dragelement=null;


const all=document.querySelectorAll(".column");

all.forEach(column =>{
  column.addEventListener('dragover',dragover);
  column.addEventListener('drop',dragdrop);
})
function dragstart(){
  //console.log("working")
  dragelement=this;
  dragelement.classList="t2"
}
function dragend(){
  dragelement=null;
  this.classList="div-style"
}
function dragover(e){
  e.preventDefault();
}
function dragdrop(){
  this.appendChild(dragelement);
}
function addcode()
{
            text=textbox.value;
            const listelement=document.createElement('p');
            var first=box1.firstchild;
            listelement.innerHTML=text;
            box1.insertBefore(listelement,first);
            textbox.value="";

            listelement.classList="div-style";
            listelement.draggable="true";
            listelement.style.userSelect="none";

          const span=document.createElement("span");
          const span_txt=document.createTextNode("\u00D7");
          span.classList="close-style"
          span.appendChild(span_txt);
          listelement.appendChild(span);
          
          listelement.addEventListener("dragstart",dragstart);
          listelement.addEventListener("dragend",dragend);

          span.addEventListener("click",()=>{
          span.parentElement.style.display="none";
          });
        
}


 textbox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        //console.log("enter")
        addcode();
        }
})

@media only screen and (max-width:500px) {
    /* For mobile phones: */
    .column{
      width: 100%;
    }
  }
