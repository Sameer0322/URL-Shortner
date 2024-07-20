const shortid = require('shortid');
const URL = require("../models/urlModel")
async function handleGenShortURL(req,res){
    const url = req.body;
    if( !url.url) return res.status(400).json({error:"url is required"});

    const shortID = shortid();

    await URL.create({
        shortID: shortID,
        redirectURL: url.url,
        visitHistory:[],
    });

    return res.json({ id: shortID });
}

async function ReGenURL(req,res){
    const shortID = req.params.id;
    const currentDate = new Date();
    const visitDate = currentDate.toISOString().split('T')[0]; 
    const visitTime = currentDate.toTimeString().split(' ')[0];
    const entry = await URL.findOneAndUpdate(
        {
            shortID,
        },
        {
            $push:{
                visitHistory: {
                    date: visitDate,
                    time: visitTime,
                }
            }
        },
        { new: true }
    );
    res.redirect(entry.redirectURL);
}

module.exports = { 
    handleGenShortURL,
    ReGenURL 
};