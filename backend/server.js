const express = require('express');
const app = express();
const cosmosClient = new CosmosClient({
  endpoint: 'https://transformhomes-server.mongo.cosmos.azure.com:443/',
  directMode: false,
  auth: {
    masterKey: 'YOUR_COSMOS_DB_MASTER_KEY'
  }
});

app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const userDoc = await cosmosClient.database('your-database-name').container('your-container-name').item(id).read();
  res.json(userDoc);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
