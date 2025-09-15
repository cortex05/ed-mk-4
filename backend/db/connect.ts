import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import dotenv from 'dotenv';
// dotenv.config({path: '../config.env'});
dotenv.config({ path: require('path').resolve(__dirname, '../config.env') });

const atlasUri = process.env.ATLAS_URI;
if (!atlasUri) {
  throw new Error('ATLAS_URI environment variable is not set.');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(atlasUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db: Db
export default module.exports = {
  connectToServer: function (callback: (err: any) => void) {
    db = client.db("mk-4-data")
  },
  getDb: function (callback: (err: any) => void) {
    return db
  }
}

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// // }
// run().catch(console.dir);
