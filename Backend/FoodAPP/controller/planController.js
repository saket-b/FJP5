const express = require("express");
const planmodel = require("../models/planModel");



module.exports.getAllPlan =async function getAllPlan(req, res)
{
    try{

        let plans = await planmodel.find();

        if( plans)
        {
            res.json({
                message:"all plans retrieved",
                data: plans
            })
        }
        else 
        {
            res.json({
                message:"plan is not found"
            })
        }

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.getPlan = async function getPlan(req, res)
{
    try{
        let id = req.params.id;
        let plan = await planmodel.findById(id);

        if(plan)
        {
            res.json({
                message:"plan is retrieved",
                data: plan
            })
        }
        else 
        {
            res.json({
                message:"plan is not found"
            })
        }

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.createPlan = async function createPlan(req,res)
{
    try{
        let planObj = req.body;

        let data = await planmodel.create(planObj);

        res.json({
            message:"plan created successfully",
            data: data
        })

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.deletePlan = async function deletePlan(req, res)
{
    try{
        let id = req.params.id;
        let data_deleted = await planmodel.findByIdAndDelete(id);
        res.json({
            message:"plan is deleted",
            data: data_deleted
        })

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.updatePlan = async function updatePlan(req, res)
{
    try{
        let id = req.params.id;
        let data_tobe_updated = req.body;

        console.log("id = ", id);
        console.log("before updation = ", data_tobe_updated);

        let plan = await planmodel.findById(id);
        console.log("plan not updated = ", plan);
        let keys= [];
        for(let key in data_tobe_updated)
        keys.push(key);

        // for( let key in keys)
        // plan[key] = data_tobe_updated[keys[key]];
        // methos 2
        for( let i=0; i<keys.length; i++)
        {
            plan[keys[i]] = data_tobe_updated[keys[i]];
        }
        console.log("plan updated = ", plan);
        let data = await plan.save();
        res.json({
            message:"plan is updated ",
            data: plan
        })

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.top3plan = async function top3plan(req, res)
{
    try{
        // this will top three average rating plans
        let top3plans = await planmodel.find().sort({ratingAverage : -1}).limit(3);

        if( top3plans )
        {
            res.json({
                message:"get top three plans ",
                data: top3plans
            })
        }
        else 
        {
            res.json({
                message:"top three plan is not found"
            })
        }

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }

}