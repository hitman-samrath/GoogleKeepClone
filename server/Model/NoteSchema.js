import mongoose from "mongoose"

const NoteSchema=new mongoose.Schema({
    heading:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        require:true
    }
})

export default mongoose.model('notes', NoteSchema);