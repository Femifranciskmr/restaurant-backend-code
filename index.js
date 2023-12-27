//import jison-server
const jsonServer=require('json-server')

//create a srever application using jsonServer
const restServer=jsonServer.create()


//setup path for db.json
const router=jsonServer.router('db.json')


//return a middleware used by json server
const middleware=jsonServer.defaults()


//setup port
const port=3001


//use in server
restServer.us(middleware)
restServer.use(router)



//to run a port
restServer.listen(port,()=>{
    console.log('rest server listening on port' +port);
})
