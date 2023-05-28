import { create } from "./actions";

export default async function New() {
  return (
    <main className="flex justify-center justify-items-center " style={{height : "80vh"}} >
      <form action={create} className="flex flex-col justify-center content-center gap-4" >
        <label htmlFor="name" className="text-3xl">Todo : </label>
        <input id="name" name="todo" type="text" className="rounded-lg text-xl text-slate-900 h-12 w-80 p-4" />
        <button type="submit" className="bg-slate-600 text-lg rounded-lg h-10">Create</button>
      </form>
    </main>
  );
}
