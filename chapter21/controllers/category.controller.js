const categoryService = require('../services/category.services');

exports.findAll = async(req, res) => {
    console.log("Find all categories");
    try {
        const result = await categoryService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading all categories");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading all categories");
    }
}

exports.findOne = async(req, res) => {
    
    const id = req.params.id;
    
    console.log("Find category:", id);
    try {
        const result = await categoryService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading category");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading category");
    }
}

exports.create = async(req, res) => {
    const name = req.body.name;
    console.log("Insert category name: ", name);

    try {
        const result = await categoryService.create(name)
        res.status(200).json({data: result});
        console.log("Success in inserting category");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in inserting category");
    }
}

exports.update = async(req, res) =>{
    const id = req.params.id
    console.log("Update Category with id:", id)

    try {
        const result = await categoryService.update(req.body)
        res.status(200).json({data: result});
        console.log("Success in updating category");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in updating category");
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id
    console.log("Delete Category with id:", id)

    try {
        const result = await categoryService.deleteCategory(id)
        res.status(200).json({data: result});
        console.log("Success in deleting category");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in deleting category");
    }
}