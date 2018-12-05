// including the fs or filesystem package
var fs = require("fs");

var axios = require("axios");
// take in a user input
var userInput = process.argv[2];
var userText = "";

for(var i = 3; i < process.argv.length; i++) {
    userText += process.argv[i] + " ";
}

var queryUrl = `http://www.omdbapi.com/?t=${userText}&y=&plot=short&apikey=trilogy`;
console.log(queryUrl);

// let's the user decide if they would like to read a file "read"
if(userInput === "read") {
    // read from a file
    fs.readFile("myFile.txt", "utf8", function(err, data){
        if(err) {
            return console.log(err);
        }

        console.log(data);
    });
} else if (userInput === "write") {
    // write a file "write"
    fs.writeFile("myFile.txt", userText, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("Writing to a file");
    });
} else if (userInput === "append") {
    // or append to a file "append"
    appendTextToFile(userText);

} else if (userInput === "movie-this") {
    // hit the url with axios 
    axios.get(queryUrl).then(function(response){
        // and display data back from a movie
        console.log(response.data);
        var movieObj = response.data;
        appendTextToFile(movieObj.Plot);
    });
    
} else {
    console.log("No command found!");
}

function appendTextToFile(text) {
    fs.appendFile("myFile.txt", text, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("appending to a file"); 
    });
}