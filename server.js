let express = require("express");
let path = require("path");
let authRouter = require("./routes/authRouter");

// run server
let server = express();

// get request url + request method
server.use((request, response, next) => {
    console.log(request.url, request.method);
    next();
});

// Check time mw
server.use((request, response, next) => {
    let mins = new Date().getMinutes();

    // console.log(mins);

    if(mins < 10) {
        // response.send("Server in Maintanance");
        next(new Error("Server in Maintanance"));
    } else {
        next();
    }
});


// home router
server.use("/home",(request, response) => {
    response.sendFile(path.join(__dirname, "views", "home.html"));
});

// Settings
server.use(express.static(path.join(__dirname, "public")));

server.use(authRouter);


// Error mw
server.use((error, request, response, next) => {
    response.send(error +"");
});




// get port number
let port = process.env.port || 8085;

server.listen(port ,() => {
    console.log("server is listening");
});

