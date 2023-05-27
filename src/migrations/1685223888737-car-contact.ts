import { MigrationInterface, QueryRunner } from "typeorm";

export class CarContact1685223888737 implements MigrationInterface {
    name = 'CarContact1685223888737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "models" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adress" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "year" integer NOT NULL, "color" character varying NOT NULL, "vin" character varying NOT NULL, "modelId" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "damages" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "notificationDate" TIMESTAMP NOT NULL, "carId" integer, CONSTRAINT "PK_9eb2a971498a88c249301247c75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_contact" ("contactsId" integer NOT NULL, "carsId" integer NOT NULL, CONSTRAINT "PK_8ba89e4c527939914778878cd6c" PRIMARY KEY ("contactsId", "carsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_653e47731a045103c54fa8304c" ON "car_contact" ("contactsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1433d1299aa1766ab3e024755b" ON "car_contact" ("carsId") `);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_415edcdb4b9eaeb5dd6ee266590" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "damages" ADD CONSTRAINT "FK_4069ee03efbc420016790341404" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_contact" ADD CONSTRAINT "FK_653e47731a045103c54fa8304c9" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "car_contact" ADD CONSTRAINT "FK_1433d1299aa1766ab3e024755b9" FOREIGN KEY ("carsId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_contact" DROP CONSTRAINT "FK_1433d1299aa1766ab3e024755b9"`);
        await queryRunner.query(`ALTER TABLE "car_contact" DROP CONSTRAINT "FK_653e47731a045103c54fa8304c9"`);
        await queryRunner.query(`ALTER TABLE "damages" DROP CONSTRAINT "FK_4069ee03efbc420016790341404"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_415edcdb4b9eaeb5dd6ee266590"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1433d1299aa1766ab3e024755b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_653e47731a045103c54fa8304c"`);
        await queryRunner.query(`DROP TABLE "car_contact"`);
        await queryRunner.query(`DROP TABLE "damages"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "models"`);
    }

}
