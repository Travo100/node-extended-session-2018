// including the fs or filesystem package
var fs = require("fs");

// take in a user input
var userInput = process.argv[2];
var userText = process.argv[3];

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
    
    fs.appendFile("myFile.txt", userText, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("appending to a file"); 
    });
} else {
    console.log("No command found!");
}