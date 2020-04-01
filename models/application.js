const bookshelf=require('../config/bookshelf');

const Application=bookshelf.Model.extend({
    tableName:'Account'
});

module.exports.create=(application)=>{
    return new Application({
        email: application.email,
        password_: application.password
    }).save();
};