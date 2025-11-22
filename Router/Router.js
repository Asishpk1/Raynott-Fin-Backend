const express = require('express')
const { addReviewController, getReviewsController } = require('../Controllers/reviewController')

const Router = new express.Router()

Router.post('/add-review',addReviewController)
Router.get('/get-reviews',getReviewsController)


module.exports = Router