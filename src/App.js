import './App.css';
import { getLyrics, getSong } from 'genius-lyrics-api';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
// import { NavLink } from "react-router-dom"
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
////
// form.addEventListener('click', function(event){
//   console.log("loaded")
//   event.preventDefault()
//   title = document.getElementById('songname').value
//   console.log(title)
//   artist = document.getElementById('artistname').value
//   console.log(artist)
  
//   thing2()
// })

let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let counter = 0;
let separators = [',',' ','\n','[',']'];
// let f = document.getElementsByClassName("front")[0];
// let b = document.getElementsByClassName("back")[0];


function thing (){
  const options = {
    apiKey: '06-NpN7daWZTnTnGGw_spHLhH-ODTy2CWZFJygRFWYlPmn8VAPSLqAz6fjoZl0B6',
    title: title,
    artist: artist,
    // title: title,
    // artist: artist,
    optimizeQuery: true
  }
  return getLyrics(options).then((lyrics)=> arr.push(lyrics))
}

function fetchApi(){
  for(let k = 0; k< arr4.length;k++){
    let url =`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${arr4[k]}?key=53a3570d-d8d5-4271-ab61-b26d57aec3d2`
    fetch(url).then(res => res.json()).then(result => arr5[k] = (result[0].shortdef[0]));
  }

  alert ("Your words have been loaded! You can use the buttons now!");
}
//arr2,3,4,5

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

