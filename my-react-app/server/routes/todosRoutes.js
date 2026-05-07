const express = require('express');

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todosController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;