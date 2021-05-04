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
 *             main_image_path:
 *               type: string
 *             title:
 *               type: string
 *             price:
 *               type: integer
 *             sub_image_path:
 *               type: array
 *               items:
 *                 type: string
 *             detail_info:
 *               type: array
 *               items:
 *                 type: string
 *           example:
 *             main_image_path: main_image_path
 *             title: title
 *             price : 3000
 *             sub_image_path : [
 *               "sub_image_path1",
 *               "sub_image_path2"
 *             ]
 *             detail_info : [
 *               "detail_info1",
 *               "detail_info2"
 *             ]
 *
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 *
 */
