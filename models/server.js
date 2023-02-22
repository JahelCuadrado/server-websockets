const express = require('express');
const cors    = require('cors');
const { socketController } = require('../controllers/sockets/socket.crontroller');


class Server { 

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT || 3000;
        this.server = require('http').createServer(this.app); //TODO websockets 1, antes de esto hemos instalado el paquete socket.io
        this.io     = require('socket.io')(this.server); //TODO websockets 2

        this.path = {}

        //Middlewares
        this.middleware();

        //Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets(); //TODO websockets 7
    }


    sockets(){  //TODO websockets 6

        //TODO wesockets 13, organizacion
        this.io.on("connection", socketController);

        
        // this.io.on("connection", socket => {
        //     console.log('Cliente conectado', socket.id);

        //     socket.on('disconnect', () => {
        //         console.log('Cliente desconectado', socket.id);
        //     })

        //     //TODO websockets 11 Con esto indicamos que estamos esperando un mensaje con ese nombre 'enviar-mensaje' y cuando llega lo imprimimos
        //     // socket.on('enviar-mensaje', (payload) => {
        //     //     console.log(payload);
        //     // })


        //     //TODO websockets 12, con esto enviamos mensajes desde el servidor al cliente
        //     socket.on('enviar-mensaje', (payload) => {
                
        //         //this.io.emit('enviar-mensaje', 'Desde el server')

        //         const id = 123456;


        //     })
        // });
    }


    middleware(){
        //CORS
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));
    }



    routes(){
       // this.app.use( this.usuariosPath,   require('../routes/usuarios.route'   )); 
    }



    listen(){
        this.server.listen(this.port, () => { //TODO websockets 3, cambiamos this.app por this.server
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

//TODO websockets 4, yendo a esta ruta en el navegador compribamos si socket.io se ha instalado correctamente: http://localhost:8081/socket.io/socket.io.js

module.exports = Server;
