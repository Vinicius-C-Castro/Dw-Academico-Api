import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('alunos')
class Alunos {
  @PrimaryColumn()
  cpf: string;

  @Column({ nullable: true })
  etnia: string;

  @Column({ nullable: true })
  sexo: string;

  @Column({ name: 'escola_origem', nullable: true })
  escolaOrigem: string;

  @Column({ name: 'renda_familiar', nullable: true })
  rendaFamiliar: string;

  @Column({ nullable: true })
  estado: string;

  @Column({ name: 'data_nascimento', nullable: true })
  dataNascimento: string;

  @Column({ name: 'matricula_situacao', nullable: true })
  matriculaSituacao: string;
}

export { Alunos };
