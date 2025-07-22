import Movie from "../models/movies.model.js";

export const MovieIndex = (req,res)=>{
    res.send("Get all movie lists");
}
export const CreateMovie = async(req,res)=>{
   
   console.log(req.body);

   //validate data
   const newMovie= new Movie({
      title : req.body.title,
      description : req.body.description,

   });
   try {
      const movie = await newMovie.save();
      return res.status(201).json(movie);
   }catch(err){
          return res.status(400).json({message:err.message});
   }
   return res.send(req.body);

}
//
export const UpdateMovie = (req,res) =>{
    
   res.send("create a movie");

}
export const DeleteMovie = (req,res) =>{
    
   res.send("create a movie");

}