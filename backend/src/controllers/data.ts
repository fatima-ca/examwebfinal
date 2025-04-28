import { studentService } from "../db/data";

class StudentController{
    

    async AllStudents(){
        const students = await studentService.getAllStudents();
      return students;
    }
      
    
    
    

}

export default StudentController;