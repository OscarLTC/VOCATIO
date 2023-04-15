import { Router } from 'express';
import { getDocumentos as getDocuments } from '../controllers/document.controller';

export const documentRouter = Router();

documentRouter.get('/all', getDocuments);
