module.exports = function(db, app, ObjectID) {
  app.post("/deleteitem", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    const product_collection = db.collection("products");
    productID = req.body.id;

    var objectID = new ObjectID(productID);

    product_collection.deleteOne({ _id: objectID }, (err, data) => {
      if (err) throw err;
      res.send(true);
    });
  });
};
