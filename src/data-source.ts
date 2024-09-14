import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/**/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/**/*.{ts,js}`],
})

export default AppDataSource
