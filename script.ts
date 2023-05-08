import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({ data: { name: 'Pradeep' } })
    // const user = await prisma.user.delete({ where: { id: 3 } })
    // const user = await prisma.user.findMany()
    await prisma.user.deleteMany()
}

main()
.catch(e => {
    console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })