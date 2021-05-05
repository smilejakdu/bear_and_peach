/**
 * @swagger
 * /product_img/main_image_upload:
 *   post:
 *     tags:
 *       - Product_Img
 *     name: Img product
 *     summary: Upload Main_Image_Upload
 *     description: Upload Product_Img
 *     consumes:
 *       - multiplart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 * 
 *     responses:
 *       '200':
 *         description: Upload Main_Image_Upload
 *       '404':
 *         fail
 * 
 */
