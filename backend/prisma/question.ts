import { PrismaClient } from ".prisma/client";
import { Category } from "src/enum/Category";
import { DbConnector } from "./db";



const db: PrismaClient = DbConnector.getInstance()
const questions = [
    {
        data: {
            question: "Fait il beau ?",
            category: Category.BACKEND,
            response: {
                create: [
                    {
                        response: "oui",
                        isGoodResponse: true
                    },
                    {
                        response: "non",
                        isGoodResponse: false
                    }, {
                        response: "peut-etre",
                        isGoodResponse: false
                    },
                    {
                        response: "surement",
                        isGoodResponse: false
                    }
                ]
            }
        }
    }, {
        data: {
            question: "et demain fait-il beau ?",
            category: Category.BACKEND,
            response: {
                create: [
                    {
                        response: "oui",
                        isGoodResponse: true
                    },
                    {
                        response: "non",
                        isGoodResponse: false
                    }, {
                        response: "peut-etre",
                        isGoodResponse: false
                    },
                    {
                        response: "surement",
                        isGoodResponse: false
                    }
                ]
            }
        }
    }
]



questions.forEach(async (q) => {
    return await db.question.create(q);
})