// eslint-disable-next-line @typescript-eslint/no-var-requires
const env = require('dotenv');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

env.config({
  path: path.join(
    __dirname,
    process.env.NODE_ENV ? `/.env.${process.env.NODE_ENV}` : '',
  ),
});

process.env.ENVIRONMENT = process.env.ENVIRONMENT || process.env.NODE_ENV;

export const typeOrmConfig = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_URL,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [`./src/domain/**/typeorm/entities/*{.ts,.js}`],
};

module.exports = typeOrmConfig;
