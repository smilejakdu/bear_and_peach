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
 *   delete:
 *     tags:
 *       - MyActive
 *     name: Delete MyActive
 *     summary: Delete MyActive
 *     desciption: Delete MyActive 
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
 *             today_board_likes_idx:
 *               type: integer
 *             today_board_idx:
 *               type: integer
 *             comment_idx:
 *               type: integer
 *             table:
 *               type: string
 *           example:
 *             today_board_likes_idx: 2
 *             today_board_idx: 15
 *             comment_idx: 6
 *             table: "today_board"
 *     
 *     responses:
 *       '200':
 *         description: Successfully delete MyActive 
 *       '404':
 *         fail
 */
