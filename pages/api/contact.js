import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    // Store in the database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    //"mongodb+srv://sofia:m2u2f11b@cluster0.ze63wtl.mongodb.net/mysite?retryWrites=true&w=majority"
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ze63wtl.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Unable to connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Unable to insert" });
      return;
    }

    client.close();

    res.status(201).json({ message: "ok", newObject: newMessage });
  }
}

export default handler;
