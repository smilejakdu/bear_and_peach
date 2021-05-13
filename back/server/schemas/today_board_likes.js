/**
 * @swagger
 * /today_board_likes:
 *   post:
 *     tags:
 *       - TodayBoardLikes
 *     name: Post TodayBoardLikes
 *     summary: Post TodayBoardLikes
 *     desciption: Post TodayBoardLikes
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             today_board_idx:
 *               type: integer
 *             user_idx:
 *               type: integer
 *           example:
 *             today_board_idx: today_board_idx
 *             user_idx: user_idx
 *
 *     responses:
 *       '200':
 *         description: Register today_board_likes
 *       '404':
 *         fail
 *
 *   delete:
 *     tags:
 *       - TodayBoardLikes
 *     name: Delete TodayBoardLikes
 *     summary: Delete TodayBoardLikes
 *     desciption: Delete TodayBoardLikes
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: today_board_idx
 *         in: body
 *         schema:
 *           properties:
 *             today_board_idx:
 *               type: integer
 *             user_idx:
 *               type: integer
 *           example:
 *             today_board_idx: today_board_idx
 *             user_idx: user_idx
 *     responses:
 *       '200':
 *         description: Successfully delete today_board_likes
 *       '404':
 *         fail
 * 
 *   get:
 *     tags:
 *       - TodayBoardLikes
 *     name: Get TodayBoardLikes
 *     summary: Get TodayBoardLikes
 *     parameters:
 *       - in: query
 *         name: today_board_idx
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: number
 * 
 *     responses:
 *       '200':
 *         description: Get TodayBoardLikes
 *       '404':
 *         fail
 * 
 */
