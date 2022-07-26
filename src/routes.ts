import { Router } from "express";
import { usersController } from "./controllers/usersController";

const routes = Router();
const usersController = new usersController();

routes.get("/users", usersController.listarUsuario);

routes.post("/users", usersController.criarUsuario);

export { routes };
