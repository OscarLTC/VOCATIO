import { Router } from "express";
import { getDocumentos } from "../controllers/documento.controller";

export const documentoRouter = Router()

documentoRouter.get("/all", getDocumentos)
