import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URL, // Make sure your Render env variable is also MONGO_URL
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true, // Ensure SSL is used (important for Atlas/Render)
      }
    )
    .then(() => console.log("DB Connected"))
    .catch((err) => {
      console.error("DB Connection Error:", err);
      process.exit(1);
    });
};
