const express = require("express");
const { send } = require("express/lib/response");
const router = express.Router();
const clientsController = require("../controllers/clients")

router.get("/", (req, res, next) => {
    clientsController.getAll(req, res) 
 });
 router.post("/", (req,res, next) => {
    clientsController.create(req, res)
 });
 router.get("/:clientsId", (req, res, next) => {
    const id = req.params.productId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
        } else {
            res.status(200).send({
                message: "Clients específico"
            })
        }
})

router.patch("/:id", (req, res, next) => {
    clientsController.update(req, res)
 });
 
 router.delete("/:id", (req, res, next) => {
  clientsController.delete(req, res)
 });
 
 module.exports = router;
 