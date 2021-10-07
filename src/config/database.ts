import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dialect = "mysql" as Dialect;

export const DB = new Sequelize("BlogPosts", "root", process.env.DB_PASSWORD, {
    dialect: dialect,
    host: "localhost",
  });
  
  