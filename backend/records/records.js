const client = new MongoClient(url);
await client.connect();
const db = client.db(name);
const result = await db.collection('collectionName').insert({
    key1: "value1"
    key2: "value2",
})

db.users.insert({
    first_name: "John", 
    last_name: "Doe",
    email: "john.doe@example.com"
  });


