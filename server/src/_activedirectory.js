/*
 * Brief Active Directory Helper Script
 * NOTE: https://www.npmjs.com/package/activedirectory2
 */
var ActiveDirectory = require('activedirectory2');
const ENV = require('../../setup/environment');
var AD = new ActiveDirectory(ENV.activeDirectoryConfig);
var user_name = process.env.USERNAME;

/*
 * @brief findUser() Function Built in ActiveDirectory2 function for finding a user
 * @param user_name String The user name in the active directory
 * @paramm ADUser Object The Active Directory User
 * @return User Object
 * NOTE!! ActiveDirectory2 - altered DEFUALTs to return all
 * NOTE!! Changes made to node_module/activedirectory2/lib/activedirectory.js lines:[68,69]
 */
AD.findUser(user_name, function(err, ADUser) {
  if (err) {
    console.log('SECUIRTY ERROR: This is not an approved user ' + JSON.stringify(err));
    return false;
  } else if (!ADUser) {
    console.log('SECUIRTY WARNING: This is not an approved user');
    return false;
  } else if (ADUser.objectGUID) {
    var missing = '******';
    User = {
      objectGUID: ADUser.objectGUID || missing,
      fname: ADUser.givenName || missing,
      lname: ADUser.sn || missing,
      location: ADUser.l || missing,
      state: ADUser.st || missing,
      title: ADUser.title || missing,
      postalCode: ADUser.postalCode || missing,
      country: ADUser.co || missing,
      telephoneNumber: ADUser.telephoneNumber || missing,
      company: ADUser.company || missing,
      department: ADUser.department || missing,
      companyAddress: ADUser.streetAddress || missing,
      email: ADUser.mail || missing
    };
    return User;
  } else {
    return false;
  }
});
