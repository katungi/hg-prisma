# Ola

## let's use prisma with postgress

- run `npm install`
- create a .env file inside `/prisma`
- add the db url in the file: `DATABASE_URL="url_to_your postgres_db"`
- run `npx prisma migrate save --experiemental` to create a db migration
- run `npx prisma migrate up --experimental` to effect the db migration
- run `npx prisma generate` to create the db client based on your db tables
