const userinfo = {
  "username": "user1",
  "password": "password1",
  }

  const createLoginTracker = (maxAttempts = 3) =>{
    let attemptCount = 0;
    return(userinfo) =>{
    attemptCount++;

    if(userinfo){
      console.log("Login Successful");
      attemptCount = 0;
      return true;
    }
    if(attemptCount >= maxAttempts){
      console.log("Account locked due to too many failed login attempt");
      return false;
    }
    console.log(`Login failed, attempt ${attemptCount} of ${maxAttempts}`);
    return false;
  }
}
const login = createLoginTracker(3);
login(null);
login(null);
login(null);
login({userinfo:["user1"]});

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};