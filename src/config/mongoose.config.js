const mongoose = require('mongoose')

const mondoUri =
   'mongodb+srv://oscarrcs123:SKA3MGzTO1MJEff9@curso-mongodb.z8q4g.mongodb.net/coding-dojo'

const DBConnection = async () => {
   try {
      await mongoose.connect(mondoUri)
      console.log('DB is connected')
   } catch (error) {
      console.log(error)
      throw new Error('Failed to initialize database')
   }
}

module.exports = DBConnection
