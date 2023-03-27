const router = require('express').Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/usaurios.controller');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;
