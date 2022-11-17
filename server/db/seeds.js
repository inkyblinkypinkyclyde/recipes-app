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
    },
    {
        recipeName: "Bread",
        ingredients: [
            { Food: "Bread Flour", Quantity: "500" },
            { Food: "Sea Salt", Quantity: "10" },
            { Food: "Sunflower Oil", Quantity: "250" },
            { Food: "Water", Quantity: "350" },
        ],
        instructions: [
            "Mix all ingredients together",
            "Knead for 10 minutes",
            "Leave to rise for 1 hour",
            "Bake for 30 minutes at 200 degrees"
        ]
    },
    {
        name: "Onion Soup",
        ingredients: [
            { Food: "White Onion", Quantity: "2" },
            { Food: "Sunflower Oil", Quantity: "50" },
            { Food: "Water", Quantity: "500" },
            { Food: "Sea Salt", Quantity: "5" },
        ],
        instructions: [
            "Chop onions",
            "Fry onions in oil",
            "Add water and salt",
            "Simmer for 30 minutes"
        ]
    }
]);