/**
 * @swagger
 * /product_img/main_image_upload:
 *   post:
 *     tags:
 *       - Product_Img
 *     name: Img product
 *     summary: Upload Main_Image_Upload
 *     description: Upload Main_Image_Upload
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
 * /product_img/sub_image_upload:
 *   post:
 *     tags:
 *       - Product_Img
 *     name: Img product
 *     summary: Upload Sub_Image_Upload
 *     description: Upload Sub_Image_Upload
 *     consumes:
 *       - multiplart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 * 
 *     responses:
 *       '200':
 *         description: Upload Sub_Image_Upload
 *       '404':
 *         fail 
 * 
 * 
 * /product_img/body_image_upload:
 *   post:
 *     tags:
 *       - Product_Img
 *     name: Img product
 *     summary: Upload Body_Image_Upload
 *     description: Upload Body_Image_Upload
 *     consumes:
 *       - multiplart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 * 
 *     responses:
 *       '200':
 *         description: Upload Body_Image_Upload
 *       '404':
 *         fail
 */
