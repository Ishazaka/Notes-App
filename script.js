

 shownotes();
let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click' , function(e){
let addtext = document.getElementById('addtext');
let notes = localStorage.getItem("notes");
if(notes == null){
   notesObj = [];
}else{
  notesObj = JSON.parse(notes);
}
 notesObj.push(addtext.value);
localStorage.setItem("notes" ,JSON.stringify(notesObj));
addtext.value = "" ;
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
  <div class="notecard mx-3 my-3 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
    <p class="card-text"> ${element} </p>
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
// function to delete notes
function deletenote(index){
  let notes = localStorage.getItem("notes");
if(notes == null){
   notesObj = [];
}else{
  notesObj = JSON.parse(notes);
}
notesObj.splice(index , 1);
localStorage.setItem("notes" ,JSON.stringify(notesObj));
shownotes();
}


 
  
