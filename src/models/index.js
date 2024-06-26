import dbConfig from "../config/dbConfig.js";

import { Sequelize } from "sequelize";
import { tutorial } from "./tutorial.model.js";
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.tutorials=tutorial(sequelize,Sequelize)
export default db