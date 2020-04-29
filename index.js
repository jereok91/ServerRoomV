const path=require('path');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routerOs= require('./src/router')
app.set('port', process.env.PORT || 3000);

publicDir = `${__dirname}/src/public`


// router
// app.get('/', routerOs);


	app.get('/', (req, res) => {
		res.sendFile(`${publicDir}/client.html`)
	})
	app.get('/streaming', (req, res) => {
		res.sendFile(`${publicDir}/server.html`)		
	})


// socket
io.on('connection', (socket) => {
    socket.on('streaming', (image) => {
		io.emit('play stream', image)
		console.log(image)
  
})});


//sever escuchando 
server.listen(app.get('port'), () =>{
    console.log(`server on port localhost:${app.get('port')}`);
});
