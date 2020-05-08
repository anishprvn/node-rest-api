// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const swaggerSpec = require('./swagger.js');
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});
// Import project controller
var projectController = require("./projectController");

router
  .route("/project")
  /**
   * @swagger
   * /project:
   *    get:
   *      description: Get list of projects added
   *      responses:
   *        '200':
   *            description: Data send
   *            content:
   *              application/json; charset=utf-8:
   *                schema:
   *                  type: string
   *                examples: {}
   */
  .get(projectController.index)
  /**
   * @swagger
   * /project:
   *   post:
   *     description: Add new project based on request body
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *              - name
   *              - duration
   *             properties:
   *               duration:
   *                 type: string
   *               technologies:
   *                 type: string
   *               name:
   *                 type: string
   *               type:
   *                 type: string
   *           examples:
   *             0:
   *               value: "{\r\n  \"name\":  \"asd\",\r\n  \"duration\": \"8\",\r\n  \"type\":  \"Web\",\r\n  \"technologies\": \"HTML, CSS\"\r\n}"
   *     responses:
   *       '200':
   *         description: Success
   *         content:
   *           application/json; charset=utf-8:
   *             schema:
   *               type: string
   *             examples: {}
   */
  .post(projectController.new);
router
  .route("/project/:project_id")
  .get(projectController.view)
  .patch(projectController.update)
  .put(projectController.update)
  .delete(projectController.delete);
// Export API routes
module.exports = router;
