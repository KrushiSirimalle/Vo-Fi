import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    const dbconnection = await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbconnection;