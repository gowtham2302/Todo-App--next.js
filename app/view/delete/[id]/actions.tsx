"use server";
import {prisma} from '@/db'
import { redirect } from 'next/navigation';



export async function delete_view(data : FormData) {
    let todo = data.get('todo') as string;
    let id = data.get('id') as string;

    await prisma.todo.delete({
            where : {
                id : parseInt(id)
            }
        })

    todo = ""

    redirect('/view')
}

