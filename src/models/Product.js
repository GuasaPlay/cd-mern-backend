const { Schema, model } = require('mongoose')

const ProductSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },
      price: {
         type: Number,
         required: true,
      },
      desc: {
         type: String,
         required: true,
         trim: true,
      },
   },
   {
      timestamps: true,
      versionKey: false,
   }
)

module.exports = model('ProductSchema', ProductSchema, 'Products')
