const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');
// 라우터 설정
router.get('/', ctrl.index);
router.get('/:id', ctrl.show);
router.delete('/:id', ctrl.destroy);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);

module.exports = router;
