
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

//function to filter content
let search = document.getElementById("searchfy");
search.addEventListener("input",function(){
  console.log("i am working");
let inputvalue = search.value.toLowerCase();
let notecard = document.getElementsByClassName("notecard");
Array.from(notecard).forEach(function(element){
 let cardtext = element.getElementsByTagName("p")[0].innerText;
 let cardtitle = element.getElementsByClassName("card-title")[0].innerText;
 
if(cardtext.includes(inputvalue) || cardtitle.includes(inputvalue) ){
   element.style.display = "block";
}else{
  element.style.display = "none";
}

})
})
 


