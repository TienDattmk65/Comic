import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'DELETE'){
        return res.status(405).end()
    }
    try{
        const current = await serverAuth(req,res)
        if(current?.role !== "AUTHOR"){
            return res.status(405).end()
        }
        const {comicId,authorId} = req.body
        const comic = await prisma.comic.findUnique({
            where:{
                id:comicId
            }
        })
        if(authorId !== comic?.authorId){
            return res.status(400).end()
        }
        const delete_comic = await prisma.comic.delete({
            where:{
                id:comicId
            }
        })
        return res.status(200).json(delete_comic)
    }catch(error){
        console.log(error)
        return res.status(400).end()
    }
}