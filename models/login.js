var db = require('./db');
module.exports = {
    verifyUser: function(user, callbackFromController){
        var sql = "SELECT * FROM users WHERE email=? AND password=? AND status=?";

        db.execute(sql, [user.email, user.password,user.status], function (result){
                  if(result.length == 1)
            {
                callbackFromController(true,result);
            }
            else
            {
                callbackFromController(false);
            }
        });

        //connection.end();
    }
};