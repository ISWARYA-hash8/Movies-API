export const MovieIndex = (req,res)=>{
    res.send("Get all movie lists");
}
export const CreateMovie = (req,res)=>{
   
   console.log(req.body);

   return res.send(req.body);

}
export const UpdateMovie = (req,res) =>{
    
   res.send("create a movie");

}
export const DeleteMovie = (req,res) =>{
    
   res.send("create a movie");

}