import mongoose from "mongoose";
const connect = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("The server connected successfully");
  } catch (error) {
    connect(error);
  }
};
export default connect;
