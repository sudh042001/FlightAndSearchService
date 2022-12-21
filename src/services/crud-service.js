 class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const result= await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong at crud-service level");
            throw(error);
        }
    }
    async destroy(repoId){
        try {
            const result=await this.repository.destroy(repoId);
            return result;
        } catch (error) {
            console.log("something went wrong at crud-service level");
            throw(error);
        }
    }
    async get(repoId){
        try {
            const result= await this.repository.get(repoId);
            return result;
        } catch (error) {
            console.log("something went wrong at crud-service level");
            throw(error);
        }
    }
    async getAll(){
        try {
            const result=await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong at crud-service level");
            throw(error);
        }
    }
    async update(repoId,data){
        try {
            const result = await this.repository.update(repoId,data);
            return result;
        } catch (error) {
            console.log("something went wrong at crud-service level");
            throw(error);
        }
    }
 }
 module.exports=CrudService;