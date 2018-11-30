const crypto = require('crypto')
const Datastore = require('@google-cloud/datastore')

const datastore = Datastore()

const getUsers = () => {
  return new Promise(resolve => {
    const query = datastore.createQuery('User')
      .limit(10)

    return datastore.runQuery(query)
      .then((results) => {
        const entities = results[0]
        console.log(entities)
        const data = entities.map(entity => {
          return {
            name: entity.name,
            age: entity.age
          }
        })
        console.log(data)
        resolve(data)
      })
  })
}

module.exports = getUsers
