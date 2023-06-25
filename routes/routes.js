const { Router } = require('express')
const defaultController = require('../controllers/defaultController')

const router = Router()

router.get('/', defaultController.default_list)
router.get('/create', defaultController.default_create)
router.post('/create', defaultController.default_save)
router.get('/edit/:id', defaultController.default_edit)
router.post('/update', defaultController.default_update)
router.get('/delete/:id', defaultController.default_delete)

module.exports = router