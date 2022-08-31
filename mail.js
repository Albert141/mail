require('dotenv').config();
var nodemailer = require ('nodemailer');
var sender = nodemailer.createTransport({
    service : 'gmail',
    auth :{
        user : 'antonyalbert44@gmail.com',
        pass : process.env.password
}
}) ;
var composemail = {
     from : 'antonyalbert44@gmail.com',
     to : 'albertantony140@gmail.com',
     subject : 'Send mail using Node JS',
     text: `hi`,
}


sender.sendMail(composemail,function(error,info){
   if(error)
   {
        console.log(error);
   }
    else{
        console.log ( " Mail Sent Successfully " + info.response ) ;
    }
});