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
 *         description: Register today_board
 *       '404':
 *         fail
 *
 *   put:
 *     tags:
 *       - TodayBoard
 *     name: Update TodayBoard
 *     summary: Update TodayBoard
 *     desciption: Update TodayBoard
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             today_board_idx:
 *               type: integer
 *             kakao_character_image_path:
 *               type: string
 *             kakao_character_name:
 *               type: string
 *             title:
 *               type: string
 *             content:
 *               type: string
 *             detail_info:
 *               type: array
 *               items:
 *                 type: string
 *           example:
 *             today_board_idx : 15
 *             kakao_character_image_path: "kakao_character_image_path"
 *             kakao_character_name: "kakao_character_name"
 *             title : "title"
 *             content : "content"
 *             images : [
 *               "images1",
 *               "images2"
 *             ]
 *
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 * 
 * 
 *   delete:
 *     tags:
 *       - TodayBoard
 *     name: Delete TodayBoard
 *     summary: Delete TodayBoard
 *     desciption: Delete TodayBoard 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: today_board_idx
 *         in: formData
 *         required: true
 *         type: string
 *     
 *     responses:
 *       '200':
 *         description: Successfully delete Product 
 *       '404':
 *         fail
 */
