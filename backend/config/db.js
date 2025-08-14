// const mongoose = require("mongoose");

// let cached = global.mongoose;
// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// const connectDB = async () => {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     const mongoUri = process.env.MONGO_URI;
//     if (!mongoUri) {
//       throw new Error("MONGO_URI is not defined");
//     }

//     cached.promise = mongoose.connect(mongoUri, {}).then((mongooseInstance) => {
//       console.log("MongoDB connected");
//       return mongooseInstance;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

let cached = global.mongoose;
if (!cached) cached = (global.mongoose = { conn: null, promise: null });

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined");

    cached.promise = mongoose.connect(uri, {
      dbName: "financepal",
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 20000,
    }).then(m => {
      console.log("MongoDB connected");
      return m;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
