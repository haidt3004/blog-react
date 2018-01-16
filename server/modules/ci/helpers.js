var Counter = require('./models/counter')

async function generateUserId(user) {
  var c = await Counter.findOneAndUpdate(
    { type: user.userType },
    { $inc: { value: 1 } },
    { upsert: true, new: true }
  )
  var baseCounter = 1234
  return getUserTypeCode(user)+(c.value+baseCounter)
}

function getUserTypeCode(user) {
  switch(user.userType) {
  case 'organisation':
    return '2'
  }
  return '1'
}

module.exports = {
  generateUserId
}