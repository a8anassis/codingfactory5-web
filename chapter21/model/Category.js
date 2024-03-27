const EntitySchema = require('typeorm').EntitySchema;

class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

const CategoryEntity = new EntitySchema({
    name: "Category",
    target: "Category",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
})

module.exports = { CategoryEntity }