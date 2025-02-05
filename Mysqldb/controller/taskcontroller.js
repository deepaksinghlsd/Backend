const Task = require("../module/Task");
 
exports.createTask= async(req ,res) => {
    try {
        const {title} = req.body;
    const newTask = await  Task.create({title});
    return res.status(201).json({
        message: "Task created successfully",
        data: newTask
    })
    } catch (error) {
        return res.status(400).json({
            message: "Error creating task",
            error: error.message
        })
    }
}

exports.Alltasks = async (req , res) => {
    try {
        const tasks = await Task.findAll();
        return res.status(200).json({
            message: "All tasks",
            data: tasks
            })
    } catch (error) {
        return res.staus(400).json({
            message: "Error fetch task",
            error: error.message
        })
    }
}

exports.update = async(req,res)=>{
    try {
        const {id} = req.params;
        const {status} = req.body;
        // const task = await Task.update({status},{where:{id}});
        const task = await Task.findByPk(id);
        if(task){
            task.status = status;
            console.log(task);
            
            await task.save();
            return res.status(200).json({
                message: "Task updated successfully",
                data: task
                })
                }else{
                    return res.status(404).json({
                        message: "Task not found",
                        error: "Task not found"
                        })
                }
    } catch (error) {
        return res.status(404).json({
            message: "Error updating task",
            error: error.message
        })
    }
}

exports.TaskDelete = async(req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByPk(id);
        if(task){
            await task.destroy();
            return res.status(200).json({
                message: "Task deleted successfully",
                data: task
                })
                }else{
                    return res.status(404).json({
                        message: "Task not found",
                        error: "Task not found"
                        })  
                        }
        
    } catch (error) {
        return res.status(404).json({
            message: "Error deleting task",
            error: error.message
            })
    }
}