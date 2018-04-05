module.exports = {
  schema:`
  # Esto es un curso en el sistema
  type Curso {
    id: ID!
    titulo: String!
    description: String!
    profesor: Profesor
    rating: Float
    cometarios: [Comentario]
  }
  
  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
  `,
  query:`
  cursos: [Curso]
  curso(id: Int): Curso
  cursoFind(query: String):Curso
  `,
  mutation:`
  
  `
}