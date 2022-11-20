const mongoose = require('mongoose');
//dotenv can be used here instead better optimized option
module.exports = mongoose.connect(
  'mongodb+srv://Ameya:Morya@123@cluster0.zbwhx.mongodb.net/?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(`Error in DB Connection ${err}`);
    if (!err) console.log(`MongoDB Connection Suceeded...`);
  },
);
