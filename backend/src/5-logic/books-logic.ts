import dal from "../2-utils/dal";
import GenreModel from "../4-models/genre-model";




async function getaAllGenre():Promise<GenreModel[]>{
    const sql = `SELECT * FROM booksstorgenre `
    const genre = await dal.execute(sql)
    return genre
}

export default {
    getaAllGenre
}