use recipes_app;
db.dropDatabase();
db.cupboard.insertMany([
    {
        name: "Sea Salt",
        superclass: "Salt",
        type: "untracked",
        present: true
    },
    {
        name: "Bread Flour",
        superclass: "Flour",
        type: "weight",
        quantity: "1000"
    },
    {
        name: "Sunflower Oil",
        superclass: "Oil",
        type: "volume",
        quantity: "500"
    },
    {
        name: "White Onion",
        superclass: "Onion",
        type: "integer",
        quantity: 5
    }
]);