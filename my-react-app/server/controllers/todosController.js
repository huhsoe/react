const Todo = require('../models/Todo');

async function getTodos(req, res) {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({
      message: 'Ошибка при получении todos',
    });
  }
}

async function addTodo(req, res) {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: 'Пожалуйста, добавьте заголовок',
      });
    }

    const todo = await Todo.create({
      title: title.trim(),
    });

    return res.status(201).json(todo);
  } catch (error) {
    return res.status(500).json({
      message: 'Ошибка при добавлении todo',
    });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: 'Пожалуйста, добавьте новый заголовок',
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title: title.trim() },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: 'Todo не найден',
      });
    }

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({
      message: 'Ошибка при редактировании todo',
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: 'Todo не найден',
      });
    }

    return res.status(200).json({
      message: 'Todo успешно удалён',
      id,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Ошибка при удалении todo',
    });
  }
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};