"use server";
import {prisma} from '@/db'
import { redirect } from 'next/navigation';



export async function delete_view(data : FormData) {
    let id = data.get('id') as string;

    await prisma.todo.delete({
            where : {
                id : parseInt(id)
            }
        })

    redirect('/view')
}

