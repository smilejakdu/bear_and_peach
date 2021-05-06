/**
 * @swagger
 * /cart:
 *   post:
 *     tags:
 *       - Cart
 *     name: Post Cart
 *     summary: Post Cart
 *     desciption: Post Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             product_idx:
 *               type: integer
 *             cart_count:
 *               type: integer
 *           example:
 *             product_idx: 35
 *             cart_count: 3
 *
 *     responses:
 *       '200':
 *         description: Register Cart
 *       '404':
 *         fail
 *   get:
 *     tags:
 *       - Cart
 *     name: Get Cart
 *     summary: Get Cart
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Get Cart
 *       '404':
 *         fail
 *
 *   put:
 *     tags:
 *       - Cart
 *     name: Put Cart
 *     summary: Put Cart
 *     desciption: Put Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             cart_idx:
 *               type: integer
 *             cart_count:
 *               type: integer
 *           example:
 *             cart_idx : 3
 *             cart_count: 2
 *
 *     responses:
 *       '200':
 *         description: Register Cart
 *       '404':
 *         fail
 *
 *   delete:
 *     tags:
 *       - Cart
 *     name: Delete Cart
 *     summary: Delete Cart
 *     desciption: Delete Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *       - name: cart_idx
 *         in: formData
 *         required: true
 *         type: integer
 *
 *     responses:
 *       '200':
 *         description: Successfully delete Cart
 *       '404':
 *         fail
 */
