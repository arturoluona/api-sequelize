const Sequelize = require('sequelize')
const { user, municipality } = require('../models')
const { matchedData } = require('express-validator')

module.exports = {
    async createItem (req, res) {
        try {
            req = matchedData(req)
            const data = await user.create (req)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async updateItem (req, res) {
        try {
            req = matchedData(req)
            const { id, ...body } = req
            const data = await user.update(body, {
                where: { id }
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItems (req, res) {
        try {
            const data = await user.findAll({
                include: [
                    {
                        model: municipality,
                        as: 'municipality'
                    }
                ]
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItem (req, res) {
        try {
            const { id } = matchedData(req)
            const data = await user.findAll({
                where: { id },
                include: [
                    {
                        model: municipality,
                        as: 'municipality'
                    }
                ]
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async deleteItem (req, res) {
        try {
            req = matchedData(req)
            const data = await user.destroy({
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
