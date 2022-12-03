import { EntityRepository, Repository } from 'typeorm';
import { Alunos } from '../entities/alunos';

@EntityRepository(Alunos)
class AlunosRepository extends Repository<Alunos> {
  public async findByEtnia(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),etnia from alunos group by etnia order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findBySexo(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),sexo from alunos group by sexo order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findByEscola(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),escola_origem from alunos group by escola_origem order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findByRenda(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),renda_familiar from alunos group by renda_familiar order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findEstado(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),estado from alunos group by estado order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findCidade(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),cidade from alunos group by cidade order by count(distinct cpf) asc`,
    );

    return alunos;
  }

  public async findMatricula(): Promise<any> {
    const alunos = await this.query(
      `select count(distinct cpf),cidade from alunos group by cidade order by count(distinct cpf) asc`,
    );

    return alunos;
  }
}

export { AlunosRepository };
