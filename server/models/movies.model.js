import { Schema ,model} from "mongoose";

const schema= new Schema({
 title : {
    type : String,
    required : true,
    unique : true},

 description : {
    type :  String,
    required : true, 
 }
});
//create your model
const Movie = model("Movie",schema);

export default Movie;