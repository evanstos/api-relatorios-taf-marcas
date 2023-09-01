import express from 'express';
import companyController from '../controllers/company.controller.js';

const router = express.Router();

router.get('/:id?',isAuth, companyController.getCompany);

export default router;


function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'Basic YWRtaW46MQ==') {
      next();
    } else {
      res.status(403);
      res.send('Acesso Negado - Usuario sem permissão para esta pagina ________________________________________________________________________');
    }
}