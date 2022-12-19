const {Op} = require("sequelize");
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
                await City.destroy({
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
                // the below approach also works but will not return updated object
                // if we are using pg then returning : true can be used else not

              //  const city=await City.update(data,{
              //      where:{
              //          id:cityId
              //      },
                 //   returning:true
              //  });
              // for getting updated data in mysql we use the below approach
              const city = await City.findByPk(cityId);
              city.name=data.name;
              await city.save();
                 return city;
                }
              catch(error){
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
    async getAllCity(filter){
        try{
            if(filter.name){
                console.log("Hello");
                const cities= await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
        catch(error){
            console.log("something went wrong");
            throw(error);
        }
    }
      
}

module.exports= CityRepository;