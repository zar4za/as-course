import { DataSource } from "typeorm";

const ormConfig: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "cars",
    entities: ["dist/**/*.entity{.ts,.js}"],
    logging: true,
    synchronize: false,
    migrations: ["dist/src/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations"
});

export default ormConfig;
