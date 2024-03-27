const categoryEntity = require('../model/Category').CategoryEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(categoryEntity)
        .createQueryBuilder()
        .select("category")
        .from(categoryEntity, 'category')
        .getMany()

    return result
}

async function findOne(id) {

    const result = await dataSource
        .getRepository(categoryEntity)
        .createQueryBuilder()
        .select('category')
        .from(categoryEntity, 'category')
        .where("category.id = :id", {id: id})
        .getOne()
 
    return result;
}

async function create(name) {
    const result = await dataSource
        .getRepository(categoryEntity)
        .createQueryBuilder()
        .insert()
        .into(categoryEntity)
        .values([
            {name: name}
        ])
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(categoryEntity)
        .createQueryBuilder()
        .update(categoryEntity)
        .set({name: data.name})
        .where("id = :id", {id: data.id})
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

async function deleteCategory(id) {
    const result = await dataSource
        .getRepository(categoryEntity)
        .createQueryBuilder()
        .delete()
        .from(categoryEntity)
        .where("id = :id", {id: id})
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteCategory }