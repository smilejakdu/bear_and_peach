/**
 * @swagger
 * /today_board:
 *   get:
 *     tags:
 *       - TodayBoard 
 *     name: Get today_board
 *     summary: Get today_board
 *     parameters:
 *       - in: query
 *         name: today_board_idx
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: number
 *     responses:
 *       '200':
 *         description: Get today_board
 *       '404':
 *         fail
 *
 *   post:
 *     tags:
 *       - TodayBoard
 *     name: Register TodayBoard
 *     summary: Register TodayBoard
 *     desciption: Register TodayBoard
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             kakao_character_image_path:
 *               type: string
 *             kakao_character_name:
 *               type: string
 *             like_counts:
 *               type: integer
 *             content_body:
 *               type: string
 *             images:
 *               type: array
 *               items:
 *                 type: string
 *           example:
 *             kakao_character_image_path: "kakao_character_image_path"
 *             kakao_character_name: "kakao_character_name"
 *             like_counts : 3
 *             content_body : "content_body_test"
 *             image : [
 *               "image_test1",
 *               "image_test2"
 *             ]
 *
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 *
 */
