import { prisma } from "@/db";
import Link from "next/link";


export default async function View() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="flex  justify-center m-10 ">
      <main
        className="flex justify-center justify-items-center bg-slate-900 items-center rounded-2xl shadow-xl"
        style={{ height: "80vh", width: "80vw" }}
      >
        <div className="flex flex-col justify-center items-center content-center gap-4 ">
          <h1 className="text-5xl mb-10">Todos : </h1>
          <ul className="flex flex-col gap-2 ">
            {todos.map((todo_s) => (
                <li className="flex text-xl gap-10 p-2 justify-between" key={todo_s.id}>
                  {todo_s.todo}
                  <div className="flex gap-3">
                  <Link href={`/view/update/${todo_s.id}`}><button className="bg-slate-600 text-sm rounded-2xl p-2 text-white">Edit</button></Link>
                  <Link href={`/view/delete/${todo_s.id}`}><button className="bg-slate-600 text-sm rounded-2xl p-2  text-white" >delete</button></Link>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
