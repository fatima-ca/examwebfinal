import express from 'express';
import StudentHttpHandler from '../handlers/data';

const router  = express.Router();

const studentHttpHandler= new StudentHttpHandler();

router.get('/', studentHttpHandler.getAllStudents);



export default router;