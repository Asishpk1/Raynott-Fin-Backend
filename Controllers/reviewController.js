const reviews = require("../Model/reviewModel");


exports.addReviewController = async(req,res)=>{
    console.log("Inside addReviewController");

    const {name,occupation,feedback} = req.body

    try{
        const newReview = new reviews({name,occupation,feedback})
        newReview.save()
        res.status(200).json(newReview)
        console.log(newReview);
        
    }
    catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
    
}

exports.getReviewsController = async (req,res)=>{
    console.log("Inside getReviewsController");

    try{
        const allReviews = await reviews.find()
        res.status(200).json(allReviews)
    }
    catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
}