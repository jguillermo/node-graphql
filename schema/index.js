
const { makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')
const casual = require('casual')
const resolvers = require('./../resolver') 
const schemaCurso = require('./curso')
const schemaProfesor = require('./profesor')

const rootQuery = `
  type Query {
    ${schemaCurso.query}
    ${schemaProfesor.query}
  }
`

const schema = makeExecutableSchema({
    typeDefs:[rootQuery,schemaCurso.schema,schemaProfesor.schema],
    resolvers
})

console.log('****ejecutando-----')

/*addMockFunctionsToSchema({
  schema,
  mocks:{
    Curso: ()=>{
      return {
        id:casual.uuid,
        titulo:casual.sentence,
        description: casual.sentences(2)
      }
    }
  }
})*/

module.exports = schema