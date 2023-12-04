import TaskCreation from "../models/task.js";

export const getAllTask = async (req, res) => {
  try {
    const allTask = await TaskCreation.find({});
    res.status(200).json({ Tasks: allTask });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await TaskCreation.findOne({ _id: taskId });
    if (!task) {
      return res.status(400).send("no id found ");
    }
    res.status(200).send({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//  Create Task
export const createTask = async (req, res) => {
  try {
    let task = await TaskCreation.create(req.body);
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask = (async (req, res) => {
    const { id: taskID } = req.params
  
    const task = await TaskCreation.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  })


export const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    let task = await TaskCreation.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ error: "No task found with the given ID" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", deletedTask: task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
