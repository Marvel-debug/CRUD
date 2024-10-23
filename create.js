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

    // Data for five authors
    const authorData = [
      { brand: "Toyota", model: "Camry", year: "2017" },
      { brand: "Lexus", model: "RX 350", year: "2019" },
      { brand: "Lamborghini", model: "Aventador", year: "2015" },
      { brand: "Ferrari", model: "Roma", year: "2012" },
      { brand: "Bugatti", model: "Veyron", year: "2018" },
    ];

    // Insert multiple documents (CREATE)
    const insertResult = await collection.insertMany(authorData);
    console.log("Inserted documents:", insertResult.insertedIds); // Array of inserted IDs

  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the main function
main().catch(console.error);