const ENVIRONMENTS = {
  'prod':
  {
    port: { client: 8080, server: 8081 },
    db:
      { name: 'myDSTI-prod-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-prod',
        port: 27017
      },
    useEslint: false
  },
  'test':
  {
    port: { client: 8082, server: 8083 },
    db:
      { name: 'myDSTI-test-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-test',
        port: 27017

      },
    useEslint: false
  },
  'dev':
  {
    port: { client: 8084, server: 8085 },
    db:
      { name: 'myDSTI-dev-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-dev',
        port: 27017

      },
    useEslint: false
  },
  'jroman':
  {
    port: { client: 8086, server: 8087 },
    db:
      { name: 'myDSTI-jroman-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-jroman',
        port: 27017

      },
    useEslint: false
  }
}

module.exports = ENVIRONMENTS.jroman
