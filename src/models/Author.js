const { Schema, model } = require('mongoose')

const AuthorSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
         minlength: 3,
      },
      quote: {
         type: String,
         required: true,
         trim: true,
         minlength: 3,
      },
   },
   {
      timestamps: true,
      versionKey: false,
   }
)

module.exports = model('Author', AuthorSchema, 'Authors')
