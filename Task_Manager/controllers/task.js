export const getAllTask = (req,res)=>{
    console.log("hello im the controller")
    res.send("controllers performing the task")
}
export const getTask = (req,res)=>{
   res.send({id:req.params.id})
}

export const createTask = (req,res)=>{
    console.log("hello im the controller create")
    res.send("controllers performing the create task")
}
export const updateTask = (req,res)=>{
    console.log("hello im the controller update")
    res.send("controllers performing the update task")
}
export const deleteTask = (req,res)=>{
    console.log("hello im the controller delete")
    res.send("controllers performing the create delete")
}


