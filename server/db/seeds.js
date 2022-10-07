use recipes_app;
db.dropDatabase();
db.cupboard.insertMany([
    {
        itemName: "Sea Salt",
        superclass: "Salt",
        type: "untracked",
        present: true
    },
    {
        itemName: "Bread Flour",
        superclass: "Flour",
        type: "weight",
        quantity: "1000"
    },
    {
        itemName: "Sunflower Oil",
        superclass: "Oil",
        type: "volume",
        quantity: "500"
    },
    {
        itemName: "White Onion",
        superclass: "Onion",
        type: "integer",
        quantity: 5
    }
]);