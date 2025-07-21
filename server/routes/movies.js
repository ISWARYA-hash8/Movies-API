//CRUD FUNCTIONALITY _ MOVIES
 import express from "express";
import { MovieIndex,CreateMovie,UpdateMovie,DeleteMovie } from "../controllers/movies.controller";
const router = express.Router();

router.get('/',MovieIndex);


//for creating movies
router.post('/',CreateMovie);

//for updating
router.put('/:id',UpdateMovie);

//for deletion
router.delete('/:id',DeleteMovie);

export default router;