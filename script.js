

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

