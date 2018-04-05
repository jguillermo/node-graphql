module.exports = {
  schema:`
  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero
    cursos: [Curso]
  }
  
  enum Genero {
    MASCULINO
    FEMENINO
  }
  `,
  query:`
  profesores:[Profesor]
  profesor(id: Int): Profesor
  `,
  mutation:`
  
  `
}