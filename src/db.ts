import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient("mongodb+srv://nelson:xyz3602@db0.mcgx82i.mongodb.net/?retryWrites=true&w=majority", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

export { run, client };
