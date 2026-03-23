const mongoose = require("mongoose");
const todosSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  username: {
    type: String,
  },
});

const todoModel = mongoose.model("todo", todosSchema);
module.exports=todoModel
