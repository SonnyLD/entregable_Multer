import express from 'express';
import isAuthenticated from '../middleware/auth.middleware.js';

export default class UsersRouter extends express.Router {
    constructor({ UserController }) {
        super();
        this.post('/', [], UserController.createUser);
        this.get('/:email', [isAuthenticated], UserController.getUser);
        // TODO: Agregar la ruta para actualizar el rol de usuario
        this.put('/premium/:uid', [isAuthenticated], UserController.updateUserRole);
        // TODO: Agregar otras rutas necesarias, por ejemplo, para actualizar la contraseña del usuario
        this.post('/:uid/documents', [isAuthenticated, upload.array('documents', 10)], UserController.uploadDocuments);
    }
}

