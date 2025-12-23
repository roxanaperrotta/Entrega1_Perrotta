import mongoose from 'mongoose';
import { UserService as svc} from '../services/user.services.js';
import { toCreateUserDTO } from '../models/dto/user.dto.js';

export const userController = {

    get: async (req, res, next) => {
        try {
          const { id } = req.params;
          if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).json({ error: "ID inválido" });
          const doc = await svc.getById(id);
          return doc
            ? res.json(doc)
            : res.status(404).json({ error: "El usuario no existe" });
        } catch (e) {
          next(e);
        }
      },
    
      create: async (req, res, next) => {
        try {
          const dto = toCreateUserDTO(req.body);
          const created = await svc.create(dto);
          res.status(201).json({ user: created });
        } catch (e) {
          next(e);
        }
      },
    

}