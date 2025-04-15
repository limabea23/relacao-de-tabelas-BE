const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Lista de casas
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada
 *       404:
 *         description: Casa não encontrada
 */

/**
 * @swagger
 * /api/houses:
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Casa criada
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   delete:
 *     summary: Deleta uma casa
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa deletada
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   put:
 *     summary: Atualiza uma casa
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: Casa atualizada
 */

router.get("/houses", houseController.getAllHouses);
router.get("/houses/:id", houseController.getHouse);
router.post("/houses", houseController.createHouse);
router.put("/houses/:id", houseController.updateHouse);
router.delete("/houses/:id", houseController.deleteHouse);

module.exports = router;