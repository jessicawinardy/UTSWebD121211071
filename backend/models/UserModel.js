import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
    dept: DataTypes.STRING,
    tanggal: DataTypes.DATEONLY
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();