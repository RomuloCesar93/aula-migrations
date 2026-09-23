import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicionarStatusRejeitada1789068000000 implements MigrationInterface {
  name = 'AdicionarStatusRejeitada1789068000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      ADD CONSTRAINT "CHK_solicitacoes_status"
      CHECK ("status" IN ('pendente', 'aprovada', 'rejeitada'))
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      DROP CONSTRAINT "CHK_solicitacoes_status"
    `);
  }
}
