const path = require('path')
const { connect, importCollection } = require('../modules/common/helpers/mongodb')

before('init database', function () {
  this.timeout(10000)
  console.log('init test database')
  return initDatabase()
})

async function initDatabase() {
  const { con, db } = await connect('mongodb://localhost:27017/rblog')
  var p1 = importCollection(db, getDataFile('blog.posts'))
  var p2 = importCollection(db, getDataFile('common.users'))
  await Promise.all([p1, p2])
  con.close()
}

function getDataFile(colName) {
  return path.resolve(__dirname, '..', '..', 'data', colName + '.json')
}

