# Quizlet for Songs!

This app was made using React.
I used the Genius Lyrics API and Merriam Webster Dictionary API as my 'input from the outside world.' The user can enter a song title and the name of the artist. On submit, the Genius API is called with those two paramaters to find the song. I used asynchronous functions to make the next step wait for the Genius API to finish. The next step after the lyrics are loaded is to split the lyrics string by spaces, commas, etc. and get every word. I removed the duplicate words from the array they were stored in so that the user doesn't see the word "you" or "the" dozens of times while going through the flashcards. After this every remaining word is passed through to the Merriam Webster Dictionary API to get the definitions. Unfortunately, not every word has a definition. 

*IMPORTANT*
* The Genius API doesn't allow for the API to be called on a browser. To get around this I used a chrome extension: 
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

* Both the Genius API and Merriam Webster Dictionary API have limited number of calls per day per key which can make for the app to not load at times if requests are being made too often/too fast.
* Two videos are included in my submission to Brightspace that go over my program and my code due to these circumstances
* I am happy to answer any questions you may have since my submission is unconventional 

##### Instructions to Run
* After downloading the code, open terminal and cd into the directory where you downloaded the file.
* Next, cd src
* Run npm start
* It will open the web app using any browser ( I used Chrome as I had to download that extension to allow for the Genius API to run)
* The code for the app is stored inside App.js and the CSS is inside App.css
##### Sources 
* https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
* https://codepen.io/edeesims/pen/wvpYWW
* https://stackoverflow.com/questions/23441060/animating-linear-gradient-using-css
* https://www.youtube.com/watch?v=uqgCF3JIHkA
* https://github.com/farshed/genius-lyrics-api
