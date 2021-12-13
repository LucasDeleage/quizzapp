import { PrismaClient } from ".prisma/client";

export class DbConnector {
    static INSTANCE: PrismaClient = null;
    static getInstance = (): PrismaClient => {
        if (!this.INSTANCE) {
            this.INSTANCE = new PrismaClient()
        }
        return this.INSTANCE
    }
}