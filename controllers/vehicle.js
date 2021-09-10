const Sequelize = require('sequelize')
const { vehicle, mark, user } = require('../models')
const { matchedData } = require('express-validator')

module.exports = {
    async createItem (req, res) {
        try {
            req = matchedData(req)
            console.log(req)
            const data = await vehicle.create (req)
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async updateItem (req, res) {
        try {
            req = matchedData(req)
            const { id, ...body } = req
            const data = await vehicle.update(body, {
                where: { id }
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async getItems (req, res) {
        try {
            const data = await vehicle.findAll({
                include: [
                    {
                        model: user,
                        as: 'user'
                    },
                    {
                        model: mark,
                        as: 'mark'
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
            const data = await vehicle.findAll({
                where: { id },
                include: [
                    {
                        model: user,
                        as: 'user'
                    },
                    {
                        model: mark,
                        as: 'mark'
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
            const data = await vehicle.destroy({
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
