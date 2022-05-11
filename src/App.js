import './App.css';
import { getLyrics, getSong } from 'genius-lyrics-api';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
//function App() has the html for the flash card and the forms for the two inputs: song name and song artist.
function App() {
  
  return (
    
    <body>
    <div className="card">
      <div className="content">
        <div className="front">
          Loading...
        </div>
        <div className="back">
          Loading...
        </div>
      </div>
    </div>

   <button id="forward" onClick={nextButton}>
      Next
   </button>
   <button id="backward" onClick={backButton}>
      Previous
   </button>
 

  <form id='form'>
    <input type ='text' id='songname' placeholder='Song Name'></input>
    <input type ='text' id='artistname' placeholder='Artist'></input>
    <input type='submit' id='button'></input>
  </form>

   <div id='gradient'></div>
    
  </body>
  );
}

export default App;

let f;
let b;

let title;
let artist;
//this function waits for the html page to finish loading and then targets the front and back texts of the flashcard as well as the button that is used to submit the form inputs
window.onload=function(){
  f = document.getElementsByClassName("front")[0];
  b = document.getElementsByClassName("back")[0];
  var form = document.getElementById('button')
  form.addEventListener('click', function(event){
    event.preventDefault()
    title = document.getElementById('songname').value
    console.log(title)
    artist = document.getElementById('artistname').value
    console.log(artist)
    thing2()
  })
}


let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let counter = 0;
let separators = [',',' ','\n','[',']'];


//this function calls the Genius API to get the lyrics
function thing (){
  const options = {
    apiKey: '06-NpN7daWZTnTnGGw_spHLhH-ODTy2CWZFJygRFWYlPmn8VAPSLqAz6fjoZl0B6',
    title: title,
    artist: artist,
   
    optimizeQuery: true
  }
  return getLyrics(options).then((lyrics)=> arr.push(lyrics))
}
//this function calls the Merriam Webster Dictionary API to get the meanings of the words
function fetchApi(){
  for(let k = 0; k< arr4.length;k++){
    let url =`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${arr4[k]}?key=53a3570d-d8d5-4271-ab61-b26d57aec3d2`
    fetch(url).then(res => res.json()).then(result => arr5[k] = (result[0].shortdef[0]));
  }

  alert ("Your words have been loaded! You can use the buttons now!");
}

//this function is essentially the main function that runs everything. it is asynchronous and it waits for the lyrics to be returned by Genius before moving forwards
//then it emptys the arrays(incase you used it once alreayd for a song) and splits the lyrics into words and removes duplicate words
//then it calls the Merriam Webster Dictionary API to get all the meanings.
async function thing2 (){
  arr = [];
  arr2 = [];
  arr3 = [];
  arr4 = [];
  arr5 = [];
  await thing()
  arr2 = arr[0].split(new RegExp(separators.join('|'), 'g'))
  arr3 = Array.from(new Set(arr2))
  for(let i = 0; i < arr3.length; i++ ){
    if(!arr3[i].includes('[')){
      arr4.push(arr3[i])
      console.log(arr3[i])
    }
  }
  fetchApi()
  
 
}

//these two functions are for the next and previous buttons. they set the innerHTML of the front and back texts by moving one forward or one abck in the arrays that have the word and the definition.
function nextButton(){
  f.innerHTML = arr4[counter]
  b.innerHTML = arr5[counter]
  counter++;
  console.log(counter)
}
function backButton(){
  counter--;
  f.innerHTML = arr4[counter]
  b.innerHTML = arr5[counter]
  console.log(counter)
}

