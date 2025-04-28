import {  Request, Response, NextFunction } from 'express';
import StudentController from '../controllers/data';

const studentController = new StudentController();

class StudentHttpHandler {
    

    //Función para obtener todos los estudiantes
    async getAllStudents(request: Request, response: Response, next: NextFunction) {
        try {
            
            const students = await studentController.AllStudents();
            response.json(students)
        } catch (error) {
            next(error)
        }
    }


 

}

export default StudentHttpHandler;