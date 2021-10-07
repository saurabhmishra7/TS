import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const DB = new Sequelize("BlogPosts", "root","Mishrasourabh@304" ,{
    dialect: "mysql",
    host: "localhost",
  });
  
  