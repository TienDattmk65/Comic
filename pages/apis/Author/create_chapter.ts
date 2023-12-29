import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'POST'){
        return res.status(405).end()
    }
    try{
        const current = await serverAuth(req,res)
        if(current?.role !== "AUTHOR"){
            return res.status(405).end()
        }
        const {imageurl,comicId}  = req.body;
        const authorIdOfcomic = await prisma.comic.findUnique({
            where:{
                id: comicId
            }
        })
        if(current.currentUser.id != authorIdOfcomic?.authorId){
            return res.status(400).end()
        } 
        const chapters = await prisma.chapter.create({
            data:{
                imageurl,
                comicId
            }
        })
        return res.status(200).json(chapters)
    }catch(error){
        console.log(error)
        return res.status(400).end()
    }
}