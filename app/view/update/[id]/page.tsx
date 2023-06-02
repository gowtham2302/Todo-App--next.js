import {prisma} from '@/db'
import { update } from './actions'
type Params = {
    params : {
        id : string
    }
}

export default async function View_id({params : {id}} : Params) {

    const curr_todo = await prisma.todo.findUnique({
        where : {
            id : parseInt(id)
        }
    })

  return (
    <main className="flex justify-center justify-items-center " style={{height : "80vh"}} >
      <form action={update} className="flex flex-col justify-center content-center gap-4" >
        <label htmlFor="name" className="text-3xl">Todo : </label>
        <input id="id" name="id" type="hidden" value={curr_todo?.id} />
        <input id="name" name="todo" type="text" defaultValue={curr_todo?.title} className="rounded-lg text-xl text-slate-900 h-12 w-80 p-4" />
        <button type="submit" className="bg-blue-500 text-lg rounded-lg h-10">update</button>
      </form>
    </main>
  );
}
