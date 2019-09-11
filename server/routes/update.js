module.exports = function(db, app, ObjectID) {
  app.post("/getItem", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    productID = req.body.passingid;
    //Create objectID from passed in+id
    var objectid = new ObjectID(productID);
    const collection = db.collection("products");
    collection
      .find({ _id: objectid })
      .limit(1)
      .toArray((err, docs) => {
        //send to client and array of items limited to 1.

        res.send(docs);
      });
  });

  app.post("/update", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    product = req.body;
    console.log(product);

    var objectid = new ObjectID(product.objectIDpassing);
    const collection = db.collection("products");
    collection.updateOne(
      { _id: objectid },
      {
        $set: {
          name: product.name,
          description: product.description,
          price: product.price,
          units: product.units
        }
      },
      () => {
        res.send(true);
      }
    );

    console.log(db.collection("products"));
  });
};
