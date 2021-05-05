/**
 * @swagger
 * /deliv_info:
 *   post:
 *     tags:
 *       - DelivInfo
 *     name: Post DelivInfo
 *     summary: Post DelivInfo
 *     desciption: Post DelivInfo
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
 *         description: Register deliv_info
 *       '404':
 *         fail
 *   get:
 *     tags:
 *       - DelivInfo
 *     name: Get DelivInfo
 *     summary: Get DelivInfo
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:           
 *           type: string
 *     responses:
 *       '200':
 *         description: Get User
 *       '404':
 *         fail
 * 
 *   put:
 *     tags:
 *       - DelivInfo
 *     name: Put DelivInfo
 *     summary: Put DelivInfo
 *     desciption: Put DelivInfo
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
 *         description: Register deliv_info
 *       '404':
 *         fail
 * 
 *   delete:
 *     tags:
 *       - DelivInfo
 *     name: Delete DelivInfo
 *     summary: Delete DelivInfo
 *     desciption: Delete DelivInfo 
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
 *         description: Successfully delete DelivInfo 
 *       '404':
 *         fail
 */
