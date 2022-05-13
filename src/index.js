const express = require('express')
const cors = require('cors')

const DBConnection = require('./config/mongoose.config')

const productRoutes = require('./routes/product.routes')

;(async () => {
   const app = express()
   app.use(cors())
   app.use(express.json())

   const baseURL = '/api'

   // Routes
   app.get('/', (_res, req) => req.json({ message: 'CODING DOJO BACKEND' }))
   app.use(`${baseURL}/product`, productRoutes)

   await DBConnection()
   const port = process.env.PORT || 4000
   app.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
   })
})()
