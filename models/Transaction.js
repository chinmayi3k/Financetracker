import mongoose,{Schema} from "mongoose";

const transactionSchema=new Schema({
     
        tran_id:{
             
             type:"string",
             required:true

            },
        type:{
            
            type:"string",
            required:true

           },
     
        budget:{
            
             type:"string",
             required:true

              }

    });
    
    export const Trans= mongoose.model('trans', transactionSchema);

     
     
   
