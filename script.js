
 shownotes();
let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click' , function(e){
let addtext = document.getElementById('addtext');
let addtitle = document.getElementById('addtitle');
let notes = localStorage.getItem("notes");
if(notes == null){
   notesObj = [];
}else{
  notesObj = JSON.parse(notes);
}
let myobj = {
  title:addtitle.value,
  text:addtext.value
}
 notesObj.push(myobj);
localStorage.setItem("notes" ,JSON.stringify(notesObj));
addtext.value = "" ;
addtitle.value = "";
shownotes();
})

function shownotes(){
 let notes = localStorage.getItem("notes");
 if(notes == null){
   notesObj = [];
 }else{
   notesObj = JSON.parse(notes);
 }
 let html = "";
 notesObj.forEach(function(element , index){
html+= `
  <div class="notecard mx-3 my-3 card"style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> ${index + 1})
     ${element.title}</h5>
    <p class="card-text"id="mysmallnote"  > ${element.text} </p>
    <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
    
  </div>
</div>`;

 }) ;
  let noteselm = document.getElementById("notes");
  if(notesObj.length != 0) {
    noteselm.innerHTML = html;
  }else{
    noteselm.innerHTML = `Add Note ~ You have not saved any note yet!! ` ;
    }
  
}
