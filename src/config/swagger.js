exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Bens Fastify API',
            description: 'Building a rest API using MongoDB, Fastify and Swagger',
            version: '1000000000'
        },
        externalDocs: {
            url: 'https://swagger.io',
            descrption: 'Find out more here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}