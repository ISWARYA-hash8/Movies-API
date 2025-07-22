import Movie from "../models/movies.model.js";

export const MovieIndex = async(req,res)=>{
   try{
      const movies = await Movie.find()
      res.json(movies);
   }catch(err){
      res.status(500).json({message:err.message});

   }
};
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
export const MovieDetails = async(req,res)=>{
   try{
      const movie = await Movie.findById(req.params.id);
        if(movie==null){
         return res.status(404).jsob({message:"Cannot find movie"});
        }else{
         res.json(movie);
        }
    }catch(err){
        return res.status(500).json({messge:err.message});
    }
}
export const UpdateMovie =async (req,res) =>{
    try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
   

}
export const DeleteMovie = async(req,res) =>{
    
   const movieId = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieId });
    res.json({ message: "Movie deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}