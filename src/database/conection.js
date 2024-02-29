const mongoose = require('mongoose');
const uri = process.env.MONGO_URI

const todoMongooseConnect = mongoose.connect(uri)
  .then(() => {
    console.log('✔️ Successfully connected to My Wallance database')
  })
  .catch((err) => {
    console.log(uri)
    console.log(err)
    console.log('❌ Error conection')
  })

module.exports = {
  todoMongooseConnect
};