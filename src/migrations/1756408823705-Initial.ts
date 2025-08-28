import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1756408823705 implements MigrationInterface {
    name = 'Initial1756408823705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "login" character varying(50) NOT NULL, "password" character varying(255) NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
