const fs = require('fs');

// Define the admin user data
const adminUser = {
  id: 1,
  name: 'admin',
  email: 'admin123@gmail.com',
  role: 'admin',
  Position: '',
  Status: '',
  NRIC: '',
  imgUrl: '',
};

// Read the existing data from db.json
const data = JSON.parse(fs.readFileSync('db.json'));

// Add the admin user to the users array
data.users.push(adminUser);

// Write the updated data back to db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

console.log('Admin user added successfully.');