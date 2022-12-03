import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { Alunos } from '../typeorm/entities/alunos';
import { AlunosRepository } from '../typeorm/repository/alunos-repository';

export class AlunosService {
  async findAll(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoCPF = await alunosRepository.find();

    if (!alunoCPF) {
      throw new AppError('Not found', 404);
    }

    return alunoCPF;
  }

  async findByEtnia(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoEtnia = await alunosRepository.findByEtnia();

    if (!alunoEtnia) {
      throw new AppError('Not found', 404);
    }

    return alunoEtnia;
  }

  async findByEscola(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoEscola = await alunosRepository.findByEscola();

    if (!alunoEscola) {
      throw new AppError('Not found', 404);
    }

    return alunoEscola;
  }

  async findBySexo(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoSexo = await alunosRepository.findBySexo();

    if (!alunoSexo) {
      throw new AppError('Not found', 404);
    }

    return alunoSexo;
  }

  async findByRenda(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoRenda = await alunosRepository.findByRenda();

    if (!alunoRenda) {
      throw new AppError('Not found', 404);
    }

    return alunoRenda;
  }

  async findByEstado(): Promise<Alunos[]> {
    const alunosRepository = getCustomRepository(AlunosRepository);

    const alunoEstado = await alunosRepository.findEstado();

    if (!alunoEstado) {
      throw new AppError('Not found', 404);
    }

    return alunoEstado;
  }
}
