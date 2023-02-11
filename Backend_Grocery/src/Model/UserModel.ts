import { Schema, model,Document} from "mongoose";

export interface DataRegister extends Document{
    username:number;
    email:string;
    password:string;
    
}
const User:Schema=new Schema({
    username:{type:String,required:true},
    email:{type: String,required:true},
    password:{type: String,required:true},
    Role:{type:String,default:"Client"},
    userConfirm:{type:Boolean,default:false},
});
export default model <DataRegister>("users",User)