const city = require("../models/city");

const {City}= require('../models/index')

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
         catch(error)
        {
            throw{error};
        }
    }
    async deleteCity({cityid}){
        try{
               await city.destroy({
                 where:{
                    id:cityid
                 }
               })
        }catch(error){
            throw{error};
        }
    }
    async
}

module.exports= CityRepository;