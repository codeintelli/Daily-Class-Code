const mongoose = require("mongoose");
// mongodb+srv://reactapp:reactapp2021@cluster0.6uatl.mongodb.net/codeintelli?retryWrites=true&w=majority
/* IF YOU WANT TO USE THIS DATABASE THEN YOU CAN BUT I THINK YOU HAVE TO CREATE YOUR OWN ACCOUNT AND USE IN IT */
mongoose
  .connect(`ENTER YOUR URL HERE`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`your database is successfully connected`);
  })
  .catch((err) => console.log(err));
