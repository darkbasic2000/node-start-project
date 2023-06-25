const Message = require('../models/Message')
const moment = require('moment')

const default_list = async(req, res) => {
    const message = await Message.findOne({})
    let notification = "There is one message"
    if(message === null) {
        notification = "There is no message"
    }        
    res.render('default', { title: 'Default Page', message, notification, moment })
}

const default_create = async(req, res) => {
    res.render('create', { title: 'Create' })
}

const default_save = async(req, res) => {
    const { title } = req.body
    const message = await Message.create({ title })
    message.save()
    const notification = "Message has been saved"
    res.render('default', { title: 'Default Page', message, notification, moment })
}

const default_edit = async(req, res) => {
    const id = req.params.id
    const message = await Message.findById(id)
    res.render('edit', { title: 'Edit', message })
}

const default_update = async(req, res) => {    
    const { _id, title } = req.body
    const updatedMessage = await Message.findById(_id)
    updatedMessage.title = title
    updatedMessage.save()
    res.redirect('/')
}

const default_delete = async(req, res) => {
    const _id = req.params.id
    await Message.deleteOne({ _id })
    const notification = "Message has been deleted"
    res.render('default', { title: 'Default Page', message: null, notification, moment })
}

module.exports = {
    default_list,
    default_create,
    default_save,
    default_edit,
    default_update,
    default_delete
}