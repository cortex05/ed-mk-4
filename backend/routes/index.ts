// const express = require('express')
import express from 'express'
const router = express.Router()
import coursesRoutes from './courses'

const defaultRoutes = [
  {
    path: 'courses',
    route: coursesRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(`/${route.path}`, route.route)
})

module.exports = router