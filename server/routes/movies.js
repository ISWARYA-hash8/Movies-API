//CRUD FUNCTIONALITY _ MOVIES
 import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
           res.send('get the list of  movies');
});


//for creating movies
router.post('/',()=>{
   res.send("create a movie");
});

//for updating
router.put('/:id',()=>{
    res.send("update movie");

});

//for deletion
router.delete('/:id',()=>{
    res.send('delete a movie');
});

export default router;