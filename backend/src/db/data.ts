class StudentService{
    //Simular datos e base de datos
    //false=tiene adeudo, true= no tiene adeudo
    
    private datastudent: { Usuario: string; Contrasenia: string; NombreCompleto: string; LibroFavorito:string}[] = [
      { Usuario:'ana.t', Contrasenia: 'libro123', NombreCompleto:'Ana Torres', LibroFavorito:'Cien Años de Soledad'},
      { Usuario:'marco.r', Contrasenia: 'lectura456', NombreCompleto:'Marco Ramírez', LibroFavorito:'El Principito'},
      { Usuario:'sofia.m', Contrasenia: 'novela789', NombreCompleto:'Sofía Morales', LibroFavorito:'Orgullo y Prejuicio'}
    ];

    async getAllStudents(): Promise<[string, string, string, string][]> {
      return this.datastudent.map(student => [student.Usuario, student.Contrasenia, student.NombreCompleto, student.LibroFavorito]);
    }
    
  }
export const studentService= new StudentService;
