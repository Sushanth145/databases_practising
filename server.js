const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pract', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


const us =new mongoose.Schema({
    name : String,
    age : Number,
    email : String
})

const User = mongoose.model('User',us)
const addUser = async () => {
    const user = new User({ name: "Sushanth", age: 45, email: "john@exaofCSbmple.com" });
    await user.save();
    console.log('User Added:', user);
  };
  
addUser();

User.find().then(users => console.log(users));


User.findOne({name : 'John Doe'}).then(user => console.log(user))

User.find().then(users => console.log(users));

User.findOneAndUpdate({ name: "John Doe" }, { age: 40 }, { new: true })
  .then(user => console.log(user));

