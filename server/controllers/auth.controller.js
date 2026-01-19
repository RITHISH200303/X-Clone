function getSignup(req,res){
    res.json({"users":["userOne"]})
}

module.exports = {
    getSignup:getSignup
}