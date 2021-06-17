// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// import userRouter from "./router/UserRouter.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//
// mongoose.connect(
//   connection_url,

//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   () => {
//     console.log("databse connected");
//   }
// );

// app.use("/api/users", userRouter);

// for showing uploaded image from upload folder to the ui and database

// app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', function(req,res){
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// };
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/UserRouter.js";
import BookingRouter from "./router/BookingRouter.js";
import bodyparser from "body-parser";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
const connection_url =
  "mongodb+srv://admin1:XxvqZUvGf8LKYJCR@cluster0.vfqse.mongodb.net/fyp_4th?retryWrites=true&w=majority";

mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database Connected");
  }
);

app.use("/api/users", userRouter);
app.use("/api/booking", BookingRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
