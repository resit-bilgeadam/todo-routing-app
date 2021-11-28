
/*
- Anasayfada Yeni todo oluştur butonu olacak +
- Yeni todo oluşturma sayfası +
- Todo listeleme sayfası +
- Todo detay sayfası +
- Todo detay sayfasında edit formu olacak +
- Edit butonuna tıklandıgında todo edit sayfasına gidecek +
- Yeni todo oluşturulduğunda, todo itemi silindiğinde todo liste sayfasına dönülsün +
- Todo editlendikten sonra todo liste sayfasına dönülsün +

- Todolarımızı barındıran bir stateimiz olmalı bu state'e heryerden erişebiliyor olmalıyız
- Todo yaratma ve editleme formlarının doğru şekilde çalışması gerek
- Todo silme butonunun doğru şekilde çalışması gerek
- Completed butonunun dogru şekilde çalışması gerek
*/
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import TodoLayout from "./layouts/TodoLayout";

const INITIAL_TODOS = [
    {id: Math.random(), title: 'Todo 1', text: 'Todo 1 description...', completed: false},
    {id: Math.random(), title: 'Todo 2', text: 'Todo 2 description...', completed: true},
    {id: Math.random(), title: 'Todo 3', text: 'Todo 3 description...', completed: false},
]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }

      return todo
    });

    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);

    setTodos(filteredTodos);
  }

  return (
    <div>
      <Toolbar/>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/create' element={<CreateTodo onCreate={addTodo} />}></Route>
          
          <Route path='/todos' element={<TodoLayout/>}>
            <Route path=':id' element={<TodoDetail todos={todos} onUpdate={updateTodo} />} />
            <Route index element={<TodoList 
                                    todos={todos} 
                                    onUpdate={updateTodo} 
                                    onDelete={deleteTodo} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
