const express = require('express')
const trimRequest = require('trim-request')
const controller = require('../controllers/user')
const validate = require('../controllers/user.validate')

const router = express.Router()

router.get(
    '/',
    trimRequest.all,
    controller.getItems
)

router.post(
    '/',
    trimRequest.all,
    validate.createItem,
    controller.createItem
)

router.get(
    '/:id',
    trimRequest.all,
    validate.getId,
    controller.getItem
)

router.patch(
    '/:id',
    trimRequest.all,
    validate.updateItem,
    controller.updateItem
)

router.delete(
    '/:id',
    trimRequest.all,
    validate.getId,
    controller.deleteItem
)

module.exports = router
