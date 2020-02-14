const Register=require('../Controller/Register')
module.exports=function(app){
    app.use('/register',Register)
}