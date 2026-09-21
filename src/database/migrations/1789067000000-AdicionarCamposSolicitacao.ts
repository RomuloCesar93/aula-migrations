import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicionarCamposSolicitacao1789067000000 implements MigrationInterface {
  name = 'AdicionarCamposSolicitacao1789067000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      ADD "centro_custo" character varying(30) NOT NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      ADD "prioridade" character varying(10) NOT NULL DEFAULT 'normal'
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      DROP COLUMN "prioridade"
    `);

    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      DROP COLUMN "centro_custo"
    `);
  }
}
