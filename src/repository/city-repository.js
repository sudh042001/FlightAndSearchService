
const {City}= require('../models/index')

class CityRepository{
    
    async createCity({name}){  //{name:"delhi"}
            try{
                const city= await City.create({
                    name
                });
                return city;
            }catch (error){
                 console.log("something went wrong");
                 throw(error);
            }
    }
    async deleteCity(cityId) {
            try{
                await City.desstroy({
                    where:{
                        id:cityId
                    }
                });
                return true;
            }catch(error){
                console.log("something went wrong");
                throw(error);
            }
    }
    async updateCity(cityId,data) {
              try{
                const city=await City.update(data,{
                    where:{
                        id:cityId
                    }
                });

                }
              }catch(error){
                console.log("something went wrong");
                throw(error);
              }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("something went wrong");
            throw(error);
        }
    }
      
}

module.exports= CityRepository;