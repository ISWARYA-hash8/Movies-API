//CRUD FUNCTIONALITY _ MOVIES
 import express from "express";
import { MovieIndex,CreateMovie,UpdateMovie,DeleteMovie,MovieDetails } from "../controllers/movies.controller.js";
const router = express.Router();

router.get('/',MovieIndex);
router.get('/:id',MovieDetails);

//for creating movies
router.post('/',CreateMovie);

//for updating
router.put('/:id',UpdateMovie);

//for deletion
router.delete('/:id',DeleteMovie);

export default router;