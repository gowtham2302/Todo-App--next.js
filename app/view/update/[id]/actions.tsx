"use server";
import {prisma} from '@/db'
import { redirect } from 'next/navigation';



export async function update(data : FormData) {
    let todo = data.get('todo') as string;
    let id = data.get('id') as string;

    await prisma.todo.update({
            where : {
                id : parseInt(id)
            },
            data : {
                title : todo
            }
        })

    todo = ""

    redirect('/view')
}

