const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://reactapp:reactapp2021@cluster0.6uatl.mongodb.net/codeintelli?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`your database is successfully connected`);
  })
  .catch((err) => console.log(err));
