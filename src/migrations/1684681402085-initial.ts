import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1684681402085 implements MigrationInterface {
    name = 'Initial1684681402085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car_model" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, CONSTRAINT "PK_525071eea12c671d67e35a5cbc8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car_model"`);
    }

}
