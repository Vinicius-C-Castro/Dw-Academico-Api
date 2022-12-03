import { Router } from 'express';
import { alunosRoutes } from './alunos.routes';

const router = Router();

router.use('/alunos', alunosRoutes);

export { router };
