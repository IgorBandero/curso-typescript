import { Music } from 'protocols';
import Joi from "joi";

export const musicSchema = Joi.object<Music>({
	title: Joi.string().required(),    
	artist: Joi.string().required()
})