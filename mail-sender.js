const nodemailer = require("nodemailer")
require("dotenv").config()
async function sender(to){
    try {
        console.log(process.env)
    
        const transporter = nodemailer.createTransport({
            
                host: process.env.SERVER ,
                port: process.env.PORT ,
                auth : {
                    user : process.env.EMAIL,
                    pass :process.env.PASSWORD
                }
            }

        )
        const option = {
            to :to,
            subject :"testin nodemailer" ,
            html : `<p>Hello ${to}</p>
          `
         
        }
transporter.sendMail(option,(error,info)=>{
    if (error){
        console.log(error)
    }else{
        console.log('email sent ', info.response);
        return info
    }
})
        
    } catch (error) {
        console.log(error)
        
    }
} 

sender("mouhammedalifaidi@gmail.com")
