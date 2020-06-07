import Task from "../models/Tasks";
import User from "../models/Users";
import Project from "../models/Projects";
import mongoose from "mongoose";

const tasksList = [
  {
    title: "task teste",
    description: "primeira task teste",
    duration: 8,
    cost: 0,
    status: "OnGoing",
    type: "Planning",
    profitable: true,
    dueDate: new Date()
  }
];

const usersList = [
  {
    name: "ingrid pitta",
    username: "ingridpitta",
    password: "12345",
    role: "project manager",
    email: "ingridpitta@email.com"
  }
];

const projectsList = [
  {
    title: "primeiro projeto",
    description: "projeto teste",
    hourPrice: 60,
    duration: 120,
    cost: 0,
    status: "ONGOING",
    dueDate: new Date()
  }
]

mongoose
  .connect("mongodb://localhost/corbie", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));

User.insertMany(usersList)
  .then(() => {
    console.log("Users inserted");
     mongoose.connection.close();
  })
