const bcrypt = require("bcryptjs");
/* 
[ ]for secure hasing the password()

[ + ] bcrypt.hash('your password/variable',round(1-12)) 


[ ] we are secure password but bcypt will not diplay password at any cost 

[ + ] bcrypt.compare('your password/variable for checking','from which you want to compare') 

[ + ] bcrypt.compare('tamaro password j check krava no che','tamaro password jena sathe check karva nu che') 

*/

const securePassword = async (password) => {
  console.log("password before using bcyptjs     " + password + "\n\n\n");
  //   6 = 64bit secure 12= 128 bit secure
  console.log(paswordHash);
  const paswordnormal = await bcrypt.compare("shiv6464", paswordHash);
  console.log(paswordnormal);
  const paswordHash = await bcrypt.hash(password, 6);
  
};

securePassword("shiv@6464");
