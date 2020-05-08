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

/**
 * @swagger
 *
 * definitions:
 *   Project:
 *     type: object
 *     required:
 *       - name
 *       - duration
 *       - technologies
 *     properties:
 *       name:
 *         type: string
 *       duration:
 *         type: string
 *       technologies:
 *         type: string
 *       type:
 *         type: string
 */

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
   *             $ref: '#/definitions/Project'
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
  /**
   * @swagger
   * /project/{id}:
   *   patch:
   *     description: Add new project based on request body
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Project'
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
   *             examples: 
   *               0:
   *                 value: "{\r\n  \"message\":  \"Project Info updated\",\r\n  \"data\": \r\n  { \r\n\t\"_id\": \"5eb52f8e1bb70e0116351e78\", \r\n\t\"name\": \"asd 2\",\r\n\t\"duration\": \"8\", \r\n\t\"type\": \"Web\", \r\n\t\"technologies\": \"HTML, CSS\" \r\n  } \r\n}"
   */
  .patch(projectController.update)
 /**
   * @swagger
   * /project/{id}:
   *   put:
   *     description: Add new project based on request body
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Project'
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
   *             examples: 
   *               0:
   *                 value: "{\r\n  \"message\":  \"Project Info updated\",\r\n  \"data\": \r\n  { \r\n\t\"_id\": \"5eb52f8e1bb70e0116351e78\", \r\n\t\"name\": \"asd 2\",\r\n\t\"duration\": \"8\", \r\n\t\"type\": \"Web\", \r\n\t\"technologies\": \"HTML, CSS\" \r\n  } \r\n}"
   */
  .put(projectController.update)
  /**
   * @swagger
   * /project/{id}:
   *   delete:
   *     description: Add new project based on request body
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Success
   *         content:
   *           application/json; charset=utf-8:
   *             schema:
   *               type: string
   *             examples: 
   *                0:
   *                  value: "{\r\n  \"status\":  \"success\",\r\n  \"message\": \"Project deleted\"\r\n}"
   */
  .delete(projectController.delete);
// Export API routes
module.exports = router;
