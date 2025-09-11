const express = require('express')
const router = express.Router()
const coursesRoutes = require('./courses.route')

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