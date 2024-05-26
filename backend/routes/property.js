const router = require('express').Router()
let Property = require('../models/property.model')
let Land = require('../models/land.model')
let House = require('../models/house.model')
let Vehicle = require('../models/vehicle.model')

router.route('/add').post((req, res) => {
    Property.create(req.body)
    .then(property => res.json(property))
    .catch(err => res.json(err))
})

module.exports = router