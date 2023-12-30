import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb"
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/apis/Authentication/[...nextauth]";
const serverAuth = async (req:NextApiRequest, res:NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)
    if(!session?.user?.email){
        throw new Error ('Not signed in')
    }
    if(session.role == "USER" || session.role == "ADMIN" || session.role =="AUTHOR"){
        const currentUser = await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
        })
        if(!currentUser){
            throw new Error ('Not signed in')
        }
        return{
            currentUser,
            role: session.role
        }
    }
}
export default serverAuth