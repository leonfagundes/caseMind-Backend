import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1726278525015 implements MigrationInterface {
    name = 'Default1726278525015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deliveryDate\` timestamp NULL, \`status\` enum ('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Tasks\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deliveryDate\` timestamp NULL, \`status\` enum ('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending', \`projectId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, \`photo\` blob NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Tasks\` ADD CONSTRAINT \`FK_ce2eeb5146a99fc267909ac0e12\` FOREIGN KEY (\`projectId\`) REFERENCES \`Projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Tasks\` ADD CONSTRAINT \`FK_ca17d7904535e3448bf3634a2ba\` FOREIGN KEY (\`userId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Tasks\` DROP FOREIGN KEY \`FK_ca17d7904535e3448bf3634a2ba\``);
        await queryRunner.query(`ALTER TABLE \`Tasks\` DROP FOREIGN KEY \`FK_ce2eeb5146a99fc267909ac0e12\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP TABLE \`Tasks\``);
        await queryRunner.query(`DROP TABLE \`Projects\``);
    }

}
