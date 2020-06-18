const mongoose = require('mongoose');
//mongodb database connection string. change it as per needed

mongoose.connect('mongodb://localhost:27017/mydb',{
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                                        });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once( 'open', function callback(){
    console.log('MongoDB Connected');
})

module.exports = db