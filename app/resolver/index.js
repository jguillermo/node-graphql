const resolvers={
    Query: {
      cursos:()=>{
        return [{
          id:1,
          titulo:'Curso   de Graphql',
          description: 'Aprendiendo GrapgQL'
        },
        {
          id:2,
          titulo:'Curso   de Java',
          description: 'Aprendiendo JAva'
        }]
      }
    },
    Curso:{
      profesor:()=>{
        return {nombre:'Pablo'}
      }
    }
  }

module.exports = resolvers