import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end()
    }
    try{
        if(req.method == 'GET'){
            const {key} = req.body;
        
        const comics = await prisma.comic.findMany({
            where:{
                title: key
            }
        })
    
    return res.status(200).json(comics)
    }
    }catch (error) {
        console.log(error);
        return res.status(400).end();
      }
    
}
