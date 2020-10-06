const { graphql, buildSchema } = require('graphql')
const schema = buildSchema(`
type Query {
    hello: String
}
`)
const root = {
    hello: () => {
        return 'hello'
    }
}
graphql(schema, '{hello}', root).then(res => {
    console.log(res)
})