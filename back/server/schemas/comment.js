/**
 * @swagger
 * /comment:
 *   get:
 *     tags:
 *       - Comment
 *     name: Get Comment
 *     summary: Get Comment
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *       - in: query
 *         name: comment_idx
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: number
 *     responses:
 *       '200':
 *         description: Get comment
 *       '404':
 *         fail
 *
 *   post:
 *     tags:
 *       - Comment
 *     name: Post Comment
 *     summary: Post Comment
 *     desciption: Post Comment
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
 *             user_idx:
 *               type: integer
 *             today_board_idx:
 *               type: integer
 *             content:
 *               type: string
 *           example:
 *             user_idx: 6
 *             kakao_character_name: 15
 *             content : "content_test"
 *
 *     responses:
 *       '200':
 *         description: Register comment
 *       '404':
 *         fail
 *   put:
 *     tags:
 *       - Comment
 *     name: Put Comment
 *     summary: Put Comment
 *     desciption: Put Comment
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
 *             comment_idx:
 *               type: integer
 *             user_idx:
 *               type: integer
 *             today_board_idx:
 *               type: integer
 *             content:
 *               type: string
 *           example:
 *             comment_idx : 5
 *             user_idx: 6
 *             today_board_idx: 15
 *             content: "content_test"
 *
 *     responses:
 *       '200':
 *         description: Update Comment
 *       '404':
 *         fail
 * 
 * 
 *   delete:
 *     tags:
 *       - Comment
 *     name: Delete Comment
 *     summary: Delete Comment
 *     desciption: Delete Comment
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:
 *           type: string
 *       - name: comment_idx
 *         in: formData
 *         required: true
 *         type: string
 *
 *     responses:
 *       '200':
 *         description: Successfully delete Comment
 *       '404':
 *         fail
 */
