
import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import  router  from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';


const server = new Server();


//BodyParser
server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use( cors({ origin: true, credentials: true}));

//rutas de servicios
server.app.use('/', router );

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT}`);
});