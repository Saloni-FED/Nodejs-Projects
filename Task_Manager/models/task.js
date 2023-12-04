import mongoose from "mongoose";

const CreateSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true,"Should not be empty"],
        trim : true,
    },
    completed: {
        type : Boolean,
        default : false
    }
});

const TaskCreation = mongoose.model('Task', CreateSchema);

export default TaskCreation;
