const Sequelize = require('sequelize')
const { municipality, vehicle} = require('../models')
const { matchedData } = require('express-validator')

module.exports = {
    async createItem (req, res) {
        try {
            req = matchedData(req)
            const data = await municipality.create (req)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async updateItem (req, res) {
        try {
            req = matchedData(req)
            const { id, ...body } = req
            const data = await municipality.update(body, {
                where: { id }
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItems (req, res) {
        try {
            const data = await municipality.findAll({})
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItem (req, res) {
        try {
            req = matchedData(req)
            const data = await municipality.findByPk(req.id)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async deleteItem (req, res) {
        try {
            req = matchedData(req)
            const data = await municipality.destroy({
                where: {
                    id: req.id
                }
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    }
};
