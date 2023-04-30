import express, { NextFunction, Request, Response, response } from "express"
import booksLogic from "../5-logic/books-logic"

const router = express.Router()

//get all genre
router.get("/genre", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const genre = await booksLogic.getaAllGenre()
        response.json(genre)
        
    } 
    catch (error) {
        next(error)
        
    }

})
export default router