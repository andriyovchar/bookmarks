import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1592154347915 implements MigrationInterface {
    name = 'InitDB1592154347915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bookmark" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "url" character varying(300) NOT NULL, "groupId" integer NOT NULL, CONSTRAINT "PK_b7fbf4a865ba38a590bb9239814" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "bookmark"`);
    }

}
