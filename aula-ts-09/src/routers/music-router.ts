import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validationSchema } from "../middleware/validationSchemas";
import { musicSchema } from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validationSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;