import React,{useState} from "react";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const stateTodo = useSelector((state) => state.changeTodo);
  const [takeInput, setTakeInput] = useState("")
  console.log(stateTodo)
  const dispatch = useDispatch();
 
  return (
    <main className="w-screen flex  p-10 justify-center bg-blue-100 h-screen overflow-y-auto">
     <section className="w-1/2  capitalize overflow-visible ">
       <article className="bg-blue-400 p-8 border-blue-700 border-2 rounded flex justify-around text-center ">
 <input className="border-blue-700 border rounded w-3/5 px-3 py-2"
        type="text"
        onChange={(e) => setTakeInput(e.target.value)}
        value={takeInput}
      />
      <button className="border-2 rounded p-2 bg-blue-600 border-blue-700 hover:bg-blue-500 w-2/6 text-white" 
        onClick={() =>
          {dispatch({
            type: "ADD",
            payload: {
              id: new Date().getTime().toString(),
              todo: takeInput,
            },
          })
        setTakeInput('')
        }
        }
      >
        Add Todo
      </button>
   </article>
   <article className="w-full mt-4 px-4 ">
        {stateTodo.TODOS.length!==0?stateTodo.TODOS.map((ele) => {
              return <div key={ele.id} className="flex px-5 py-2 w-full border rounded border-blue-200 mt-2 justify-between bg-blue-300 text-blue-900"> <p className="w-3/5" >{ele.todo}</p>
              <button className="w-2/6 border border-red-500 rounded bg-red-400 hover:bg-red-300 text-white" onClick={()=>dispatch({type:"REMOVE",payload:ele.id})}>Remove Me</button>
              </div>}):(
           <h1 className="w-full bg-red-300 py-8 text-center rounded text-3xl text-white">enter Something</h1>)}
      </article>
      </section>
    </main>
  )
}
