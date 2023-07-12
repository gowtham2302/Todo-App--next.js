import { prisma } from "@/db";
import Link from "next/link";


export default async function View() {
  const todos = await prisma.todo.findMany();

  return (
    <>
     <div className="flex gap-3 ml-4">
      <a
        href="/"
        className="bg-gray-900 text-lg text-white w-28 h-8 flex justify-center"
      >
        <button type="submit">Home</button>
      </a>
      <a
        href="/new"
        className="bg-gray-900 text-lg text-white  w-28 h-8 flex justify-center"
      >
        <button type="submit">create</button>
      </a>
      </div>
    <div className="flex  justify-center m-10 ">
      <main
        className="flex justify-center  items-center"
        style={{ height: "80vh", width: "80vw" }}
      >
        <div className="flex flex-col justify-center items-center content-center gap-4 ">
          <h1 className="text-5xl mb-10">Todos : </h1>
          <ul className="flex flex-col gap-2 ">
            {todos.map((todo_s) => (
                <li className="flex text-xl text-white gap-10 p-2 justify-between" key={todo_s.id}>
                  {todo_s.title}
                  <div className="flex gap-4">
                  <Link href={`/view/update/${todo_s.id}`}><button className="bg-blue-500 text-sm rounded-xl p-2 text-white">Edit</button></Link>
                  <Link href={`/view/delete/${todo_s.id}`}><button className="bg-blue-500 text-sm rounded-xl p-2  text-white" >delete</button></Link>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
    </>
  );
}
