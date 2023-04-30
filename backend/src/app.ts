import express from "express";
import routeNotFound from "./3-middelware/route-not-founn";
import catchAll from "./3-middelware/catch-all";
import appConfig from "./2-utils/appconfig";




const server = express()
server.use(express.json())
//server.use("/api",books)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port ${appConfig.port}`)))





