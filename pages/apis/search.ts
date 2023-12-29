import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb"

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end()
    }
    try{
        const {keyword} = req.query;
        if(!keyword || typeof keyword !== 'string'){
            throw new Error('Invaid ID')
        }

        const comics = await prisma.comic.findMany({
            where:{
                OR:[
                    {title:{contains:'keyword'}},
                    {desc:{contains:'keyword'}}
                ]
            },
            include:{author:true}
        })
        return res.status(200).json(comics)
    }catch (error){
        console.log(error)
        return res.status(400).end()
    }
}