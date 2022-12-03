import { Request, Response } from 'express';
import { AlunosService } from '../services/alunos-service';

async function findAll(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosCPF = await alunosService.findAll();

  return response.status(200).json(alunosCPF);
}

async function findByEtnia(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosEtnia = await alunosService.findByEtnia();

  return response.status(200).json(alunosEtnia);
}

async function findByEscola(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosEscola = await alunosService.findByEscola();

  return response.status(200).json(alunosEscola);
}

async function findBySexo(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosSexo = await alunosService.findBySexo();

  return response.status(200).json(alunosSexo);
}

async function findByRenda(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosSexo = await alunosService.findByRenda();

  return response.status(200).json(alunosSexo);
}

async function findByEstado(
  request: Request,
  response: Response,
): Promise<Response> {
  const alunosService = new AlunosService();

  const alunosEstado = await alunosService.findByEstado();

  return response.status(200).json(alunosEstado);
}

export default {
  findAll,
  findByEtnia,
  findBySexo,
  findByEscola,
  findByRenda,
  findByEstado,
};
