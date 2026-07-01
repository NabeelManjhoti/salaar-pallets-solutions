import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import bcrypt from "bcryptjs"

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error("DATABASE_URL is required. Set it in .env file.")
}
const adminEmail = process.env.ADMIN_EMAIL
if (!adminEmail) {
  throw new Error("ADMIN_EMAIL is required. Set it in .env file.")
}
const adminPassword = process.env.ADMIN_PASSWORD
if (!adminPassword) {
  throw new Error("ADMIN_PASSWORD is required. Set it in .env file.")
}

const adapter = new PrismaNeon({ connectionString: databaseUrl })
const prisma = new PrismaClient({ adapter })

async function main() {
  const hashedPassword = await bcrypt.hash(adminPassword!, 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail!,
      password: hashedPassword,
      role: "admin",
    },
  })

  console.log("Admin user created:", admin.email)
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
