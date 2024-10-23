const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string if needed
const dbName = 'bookstore';

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("Connected successfully to MongoDB server");

    // Select the database
    const db = client.db(dbName);

    // Select the collection (like a table in SQL)
    const collection = db.collection('authors'); 

     // Update a document (UPDATE)
        const updateResult = await collection.updateOne({ brand: "Lexus" }, { $set: { model: "RX 300" } });
        console.log("Updated document count:", updateResult.modifiedCount);

} finally {
    // Close the connection
    await client.close();
  }
}

// Run the main function
main().catch(console.error);