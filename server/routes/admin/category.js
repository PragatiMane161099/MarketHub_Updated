const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

router.get('/',(request,response) => {
    const statement = `select id, title, description from catagory`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response) => {
    const {title, description} = request.body
    const statement = `insert into catagory (title, description) values ('${title}','${description}')`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.put('/:id',(request,response) => {
    const {id} = request.params
    const {title, description} = request.body
    const statement = `update catagory set title = '${title}', description = '${description}' where id =${id}`
    console.log(statement)
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.delete('/:id',(request,response) => {
    const {id} = request.params
    const statement = `delete from catagory where id =${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

module.exports = router