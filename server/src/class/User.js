class User {
    constructor(user, Request, ENV) {
      this.Request = Request;
      this.baseURL = ENV.baseURL+':'+ENV.port.server;
      this.user_name = user.cn;
      this.user_SID = user.objectSid;
      this.User = {};
    }

    /* @brief Does the user exist in myDSTI */
    exists () {
      this.Request
        .get(this.baseURL+'/users/1')
        .on('res', function(res){
         this.User = res.body;
         return res.status === 200;
        });
    }

    /* @brief INSERT user into myDSTI */
    create () {
      console.log("&&&&& NOW CREATE the USER &&&&&&&");
      //this.Request
      //  .post(this.baseURL+'/user')
      //  .on('res', function(res){

      //  });
      //  return;
    }

    /* @brief UPDATE user into myDSTI */
    update () {

    }
    /* @brief: compare myDSTI user info to ActiveDirectory user info */
    compare() {
      console.log("&&&&& NOW compare the USER &&&&&&&");
    }
}

module.exports = User;