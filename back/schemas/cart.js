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
 *             base_address:
 *               type: string
 *             detail_address:
 *               type: string
 *             zipcode:
 *               type: string
 *           example:
 *             base_address: "base_address"
 *             detail_address: "detail_address"
 *             zipcode : "112"
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
 *             deliv_info_idx:
 *               type: integer
 *             base_address:
 *               type: string
 *             detail_address:
 *               type: string
 *             zipcode:
 *               type: string
 *           example:
 *             deliv_info_idx : 1
 *             base_address: "base_address"
 *             detail_address: "detail_address"
 *             zipcode : "112"
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
 *       - name: deliv_info_idx
 *         in: formData
 *         required: true
 *         type: string
 *
 *     responses:
 *       '200':
 *         description: Successfully delete Cart
 *       '404':
 *         fail
 */
