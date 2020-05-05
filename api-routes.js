// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Import project controller
var projectController = require('./projectController');
// project routes
// router.post('/project', function (req, res) {
//   console.log(req.body)
//   res.json({
//       status: 'API Its Working',
//       message: req.body
//   });
// });
router.route('/project')
    .get(projectController.index)
    .post(projectController.new);
// router.route('/project/:project_id')
//     .get(projectController.view)
//     .patch(projectController.update)
//     .put(projectController.update)
//     .delete(projectController.delete);
// Export API routes
module.exports = router;