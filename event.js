const EventEmiiter = require('events')

const customEvent = new EventEmiiter()
const users =['john', 'jane', 'doe']
customEvent.on('users',(name, id)=>{
    // console.log(users);
    console.log(`data received with Name:${name} id:${id}`);
})
customEvent.emit('users','sid',25)