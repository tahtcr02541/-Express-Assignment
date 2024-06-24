import express from "express";

const app = express();
const port = 4000;

const johnProfile = {
  data: {
    name: "john",
    age: 20,
  },
};

app.get("/test", (req, res) => {
  return res.status(200).json(johnProfile);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
