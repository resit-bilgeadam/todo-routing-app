
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

import { Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import TodoLayout from "./layouts/TodoLayout";

function App() {
  return (
    <div>
      <Toolbar/>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/create' element={<CreateTodo/>}></Route>
          
          <Route path='/todos' element={<TodoLayout/>}>
            <Route path=':id' element={<TodoDetail />} />
            <Route index element={<TodoList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
