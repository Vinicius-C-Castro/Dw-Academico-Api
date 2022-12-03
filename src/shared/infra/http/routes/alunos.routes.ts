import { Router } from 'express';

import alunosController from 'domain/alunos/controllers/alunos-controller';

const alunosRoutes = Router();

alunosRoutes.get('/etnia', alunosController.findByEtnia);
alunosRoutes.get('/escola', alunosController.findByEscola);
alunosRoutes.get('/sexo', alunosController.findBySexo);
alunosRoutes.get('/renda', alunosController.findByRenda);
alunosRoutes.get('/estado', alunosController.findByEstado);

export { alunosRoutes };
