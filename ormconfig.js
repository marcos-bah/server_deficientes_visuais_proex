console.log(process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": ['src/database/migrations/*.ts'],
    "entities": ['src/entities/*.ts'],
    "ssl": "true",
    "dialectOptions": {
        "ssl": {
            "require":"true", 
            "rejectUnauthorized": "true", 
        },
    },
    "cli": {
        "migrationsDir": [
            './src/database/migrations'
        ],
    }
}