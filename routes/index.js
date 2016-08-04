var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  profile: profile,
  searchCar : searchCar 
}

function get (req, res) {
  knex('users')
  .select()
  .then(function (users) {
    res.render('index', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })

}

function profile (req, res) {
  knex('users')
  .select()
  .then(function (users) {
    res.render('profile', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })

}

function searchCar (req, res) {

}
