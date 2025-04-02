import dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV;

dotenv.config({
  path: path.join((process.cwd(),
  `.env.${env}`))
});

export default {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET
};
