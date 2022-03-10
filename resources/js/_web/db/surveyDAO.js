import { db } from './db';

export class SurveyDAO {

    static getInstance(){
        return new SurveyDAO()
    }

    get(){
        return db.survey.where('product').noneOf('null').toArray();
    }

    delete(){
        return db.survey.clear();
    }

    save(survey){
        return db.survey.add(survey);
    } 

    getBranch(){
        return db.branch.toArray();
    }

    saveBranch(branch){
        return db.branch.put({id:1,branch_id: branch});
    }

    deleteProducts(){
        return db.products.clear();
    } 

    saveProducts(products){
        return db.products.add(products);
    } 

    getProducts(){
        return db.products.toArray();
    } 

    getProduct(product){
        return db.products.where({product_id: product}).toArray();
    } 
    
    update(id,survey){
        return db.survey.update(id,survey);
    } 
}