const ENVIRONMENTS = {
  'prod':
  {
    port: { client: 8080, server: 8081 },
    baseURL: 'http://10.0.3.21',
    db:
      { name: 'myDSTI-prod-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-prod',
        port: 27017
      },
    activeDirectoryConfig:
      {
        url: 'ldap://dsti.local',
        baseDN: 'dc=dsti,dc=local',
        username: 'jonroman@dsti.local',
        password: '81jNr20',
        user: ['SID']
      },
    useEslint: false
  },
  'test':
  {
    port: { client: 8082, server: 8083 },
    baseURL: 'http://10.0.3.21',
    db:
      { name: 'myDSTI-test-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-test',
        port: 27017

      },
    activeDirectoryConfig:
      {
        url: 'ldap://dsti.local',
        baseDN: 'dc=dsti,dc=local',
        username: 'jonroman@dsti.local',
        password: '81jNr20',
        user: ['SID']
      },
    useEslint: false
  },
  'dev':
  {
    port: { client: 8084, server: 8085 },
    baseURL: 'http://10.0.3.21',
    db:
      { name: 'myDSTI-dev-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-dev',
        port: 27017

      },
    activeDirectoryConfig:
      {
        url: 'ldap://dsti.local',
        baseDN: 'dc=dsti,dc=local',
        username: 'jonroman@dsti.local',
        password: '81jNr20',
        user: ['SID']
      },
    useEslint: false
  },
  'jroman':
  {
    port: { client: 8086, server: 8087 },
    baseURL: 'http://svutil12.dsti.local',
    db:
      { name: 'myDSTI-jroman-DB',
        user: 'client',
        pwd: 'iAmTheClient2019-jroman',
        port: 27017

      },
    activeDirectoryConfig:
      {
        url: 'ldap://dsti.local',
        baseDN: 'dc=dsti,dc=local',
        username: 'jonroman@dsti.local',
        password: '81jNr20',
        user: ['SID']
      },
    useEslint: false
  }
}

module.exports = ENVIRONMENTS.jroman