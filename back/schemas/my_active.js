/**
 * @swagger
 * /my_active:
 *   get:
 *     tags:
 *       - MyActive
 *     name: Get MyActive
 *     summary: Get MyActive
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Get Product
 *       '404':
 *         fail
 *
 */
