const Sequelize = require('sequelize')
const { mark, vehicle} = require('../models')
const { matchedData } = require('express-validator')

module.exports = {
    async createItem (req, res) {
        try {
            req = matchedData(req)
            const data = await mark.create (req)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async updateItem (req, res) {
        try {
            req = matchedData(req)
            const { id, ...body } = req
            const data = await mark.update(body, {
                where: { id }
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItems (req, res) {
        try {
            const data = await mark.findAll({})
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItem (req, res) {
        try {
            req = matchedData(req)
            const data = await mark.findByPk(req.id)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async deleteItem (req, res) {
        try {
            req = matchedData(req)
            const data = await mark.destroy({
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
