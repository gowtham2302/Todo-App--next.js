import {prisma} from '@/db'
import { delete_view } from './actions'
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
      <form action={delete_view} className="flex flex-col justify-center content-center gap-4" >
        <input id="id" name="id" type="hidden" value={curr_todo?.id} />
        <p>Are you sure want to delete this todo...</p>
        <p className='text-lg font-bold text-white'>{curr_todo?.title}</p>
        <button type="submit" className="bg-blue-500 text-lg rounded-lg h-10">delete</button>      
    </form>
    </main>
  );
}
