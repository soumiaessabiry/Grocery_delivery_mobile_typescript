import { Schema, model,Document} from "mongoose";

export interface DataRegister extends Document{
    username:number;
    email:string;
    password:string;
    confirmpassword:string;
}
const User:Schema=new Schema({
    username:{type:String,required:true},
    email:{type: String,required:true},
    password:{type: String,required:true},
    confirmpassword:{type: String,required:true},
});
export default model <DataRegister>("users",User)