const {AirportService}=require('../services/index');
const airportService=new AirportService();
const create=async(req,res)=>{
    try {
        const response= await airportService.create(req.body);
        return res.status(201).json({
            message:'Successfully created the airport',
            err:{},
            data:response,
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data:{},
            success:false,
            err:error,
            message:'cannot be created'
        })
    }
}


module.exports={
    create
}