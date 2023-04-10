import { Router } from "express";
import { createAlumno, deleteAlumno, getAlumnoById, getAlumnos, updateAlumno } from "../controllers/alumno.controller";

export const alumnoRouter = Router()

alumnoRouter.get("/all", getAlumnos)
alumnoRouter.get("/:id", getAlumnoById)
alumnoRouter.post("/save", createAlumno)
alumnoRouter.put("/:id", updateAlumno)
alumnoRouter.delete("/:id", deleteAlumno)
