import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDb is already connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: "Halo Chat",
			useNewUrlParser: true,
			uneUnifiedTopology: true,
		});

		isConnected = true;
		console.log("MongoDb is connected successfully");
	} catch (error) {
		console.log(error);
	}
};
