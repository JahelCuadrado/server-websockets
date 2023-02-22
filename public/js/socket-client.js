
const socket = io(); //TODO websockets 8


//TODO websockets 9
socket.on('connect', ()=>{
    console.log('Conectado');
});

socket.on('disconnect', ()=>{
    console.log('Desconectdo');
});


////TODO websockets 10, con esto le estamos mandando un mensaje al servidor, esto en realidad no deberia estar asi, ese emit, deberia ejecutarse al pulsar un botón o algo como el botón de enviar un mensaje en un chat.
const payload = {
    msg: "Hola, este es mi mensaje",
    id: "5484166161632",
    fecha: new Date().getTime()
}

socket.emit('enviar-mensaje', payload);



//TODO websockets 13, con esto recibimos el mensaje que nos manda el servidor.
socket.on('enviar-mensaje', payload, (id) => {
    console.log('Desde el server', id);
})