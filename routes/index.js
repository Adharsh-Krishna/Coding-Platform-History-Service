
let express = require('express');
let router = express.Router();

let history_controller = require("../controllers/history-controller.js");


// localhost:8080/history/5aa13c7ebcf3b71a8c8f64fa/5a9d42f15a04843c44fd4ec2

router.get('/history/:user_id', function (req, res) {
    history_controller.fetch_history_of_user_of_problem(req, res);
});

router.post('/history', function (req, res) {
    history_controller.post_history_of_user_of_problem(req, res);
});

module.exports = router