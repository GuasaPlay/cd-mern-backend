const { isValidObjectId } = require('mongoose')

exports.validateObjectId = objectId => isValidObjectId(objectId)
