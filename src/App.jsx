import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';

console.log(uuid);
function App() {
  //todoList 설계
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    }, {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: false,
    }, {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: true,
    },
  ]);
  //input
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //titleHandler
  // const titleHandler = function(event){
  //   setTitle(event.target.value);
  // }

  //할일 목록 구분
  const todoList = todos.filter((todo) => {
    return todo.isDone === false;
  })
  //완료 목록 구분
  const doneList = todos.filter((todo) => {
    return todo.isDone === true;
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList</h1>
      </header>
      <main>
        <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
              id: uuid(),
              title: title,
              contents: contents,
              isDone: false,
            }
            setTodos([...todos, newTodo])
          }}>
            <div>
              제목 : <input value={title} onChange={(event) => {
                setTitle(event.target.value);
              }} /> <br />
              내용 : <input value={contents} onChange={(event) => {
                setContents(event.target.value);
              }} /> <br />
              <button type='submit'>추가</button>
            </div>
          </form>
        </div>
        <div>
          <h2>할일 목록</h2>
          {
            todoList.map(function (todo) {
              return (
                <div>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.contents}</p>
                  <p>완료여부 : {todo.isDone.toString()}</p>
                  <button onClick={() => {
                    const deleted = todos.filter((item) => {
                      return item.id !== todo.id
                    });
                    setTodos(deleted);
                  }}>삭제</button>
                  <button onClick={() => {
                    const doneTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {}
                      } else {
                        return {}
                      }
                    })
                  }}>완료</button>
                </div>

              )
            })
          }
        </div>
        <div>
          <h2>완료 목록</h2>
          {
            doneList.map(function (todo) {
              return (
                <div>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.contents}</p>
                  <p>완료여부 : {todo.isDone.toString()}</p>
                  <button onClick={() => {
                    const deleted = todos.filter((item) => {
                      return item.id !== todo.id
                    });
                    setTodos(deleted);
                  }}>삭제</button>
                  <button >완료취소</button>
                </div>

              )
            })
          }
        </div>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
