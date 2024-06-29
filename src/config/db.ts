import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();


const { PG_URI } = process.env;
console.log(PG_URI);
if (!PG_URI) {
    throw new Error('PG_URI is not defined in the environment variables');
}

const sequelize = new Sequelize(PG_URI);

export default sequelize;
