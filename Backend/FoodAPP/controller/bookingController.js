const Secret_key = require("../../Secret");

const stripe = require("stripe")(Secret_key);
const planmodel = require("../models/planModel");
const usermodel = require("../models/userModel");

module.exports.createSession = async function createSession(req, res){

    try{
        let userid = req.id;
        let planid = req.params.id;
        console.log("inside create sessionn");
        const user = await usermodel.findById(userid);
        const plan = await planmodel.findById(planid);

        const session = stripe.Checkout.sessions.create({
            payment_method_types:['card'],
            customer_email:user.email,
            client_refrance_id: plan.id,
            line_items:[{ 
                name :plan.name,
                description: plan.description,
                amout :plan.amout,
                quantity: 1
            }],
            success_url: `${req.protocol}://${req.get("host")}/profile`,
            cancel_url: YOUR_DOMAIN + '/cancel.html',
       })

       res.status(200).json({
            status:"success",
       })

    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}