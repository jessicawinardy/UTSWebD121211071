import { Sequelize } from "sequelize";

const db = new Sequelize('pengunjung_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;