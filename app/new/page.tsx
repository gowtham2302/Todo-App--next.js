import { create } from "./actions";

export default async function New() {
  return (
    <div className="flex justify-center justify-items-center" style={{height : "80vh"}}>
    <main className="flex justify-center justify-items-center shadow-2xl "style={{height : "80vh" , width :"80vw"}} >
      <form action={create} className="flex flex-col justify-center content-center gap-4" >
        <label htmlFor="name" className="text-3xl">Todo : </label>
        <input id="name" name="todo" type="text" className="rounded-lg  text-slate-900 h-12 p-4 md:text-xl  md:w-80" />
        <button type="submit" className="bg-blue-500 text-lg text-white rounded-lg h-10">Create</button>
      </form>
    </main>
    </div>
  );
}
