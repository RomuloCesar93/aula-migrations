import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EntityManager, Repository } from 'typeorm';

import { Auditoria } from './auditoria.entity';

@Injectable()
export class AuditoriaService {
  constructor(
    @InjectRepository(Auditoria)
    private readonly repository: Repository<Auditoria>,
  ) {}

  async registrar(
    atorId: number,
    acao: string,
    recursoTipo: string,
    recursoId: number,
    detalhes?: Record<string, unknown>,
    manager?: EntityManager,
  ): Promise<Auditoria> {
    const repositorio = manager
      ? manager.getRepository(Auditoria)
      : this.repository;

    const auditoria = repositorio.create({
      atorId,
      acao,
      recursoTipo,
      recursoId,
      detalhes: detalhes ?? null,
    });

    return repositorio.save(auditoria);
  }
}
