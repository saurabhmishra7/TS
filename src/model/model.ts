import { DataTypes, Model } from "sequelize";
import { DB } from "../config/database";


interface IBlogAttribute {
    blogId?: number;
    title: string;
    description: Text;
}

export class BlogInstances extends Model<IBlogAttribute> {};


BlogInstances.init(
    {
        blogId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {  
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, 
    {
    tableName: "DailyBloging",
    sequelize: DB,
    }
);




























/* import Sequelize from "sequelize";

import  sequence  from "../config/database";

const Blog = sequence.define("Blog", {
    blogID: {
        type: Sequelize.INTEGER,
        autoIncreament: true,
        primaryKey: true
    },

    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },

});

export default Blog; */