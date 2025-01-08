const mongoose = require("mongoose")

function connectToDataBase(url)
{
    return mongoose.connect(url);
}

module.exports = connectToDataBase;
