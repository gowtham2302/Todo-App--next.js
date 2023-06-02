"use server";
import {prisma} from '@/db'
import { redirect } from 'next/navigation';


export async function create(data : FormData) {
    let todo = data.get('todo') as string;

    await prisma.todo.create({
        data : {
            title : todo
        }
    })

    todo = ""

    redirect('/view')
}