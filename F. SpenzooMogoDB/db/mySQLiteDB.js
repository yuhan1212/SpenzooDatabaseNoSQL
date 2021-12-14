const { MongoClient } = require("mongodb");

async function getUsers() {
  let client, db;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user");
    return await userCollection.find().limit(10).toArray();
  } finally {
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function createUser(newUser) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user");
    stmt = await userCollection.insertOne({
      name: ":name",
      gender: ":gender",
      dateofBirth: ":dateofBirth",
    });

    stmt.bind({
      ":name": newUser.name,
      ":gender": newUser.gender,
      ":dateOfBirth": newUser.dateOfBirth,
    });

    return await stmt.run();
  } finally {
    // await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function getUserById(userId) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user");
    stmt = await userCollection.find({ userId: ":userId" });

    stmt.bind({
      ":userId": userId,
    });

    return await stmt.get();
  } finally {
    await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function deleteUser(userToDelete) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user");

    stmt = await userCollection.deleteOne({ userId: ":userToDelete" });

    stmt.bind({
      ":userToDelete": userToDelete.userId,
    });

    return await stmt.run();
  } finally {
    await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function getUserBudgets() {
  let client, db;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user_budget");

    return await userCollection.find().limit(10).toArray();
  } finally {
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function createUserBudget(newUserBudget) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user_budget");

    stmt = await userCollection.insertOne({
      userId: ":UserId",
      budgetId: ":budgetId",
    });

    stmt.bind({
      ":UserId": newUserBudget.UserId,
      ":budgetId": newUserBudget.budgetId,
    });

    return await stmt.run();
  } finally {
    await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function getUserBudgetById(UserId) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user_budget");

    stmt = await userCollection.find({ userId: ":UserId" });

    stmt.bind({
      ":UserId": UserId,
    });

    return await stmt.get();
  } finally {
    await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

async function deleteUserBudget(userBudgetToDelete) {
  let client, db, stmt;
  try {
    const myserver = "mongodb://localhost:27017";
    client = new MongoClient(myserver);
    await client.connect();
    db = client.db("spenzooDB");
    const userCollection = await db.collection("user_budget");
    stmt = await userCollection.deleteOne({
      userId: ":userToDelete",
      budgetId: ":deleteBudgetId",
    });

    stmt.bind({
      ":deleteUserId": userBudgetToDelete.UserId,
      ":deleteBudgetId": userBudgetToDelete.budgetId,
    });
    return await stmt.run();
  } finally {
    await stmt.finalize();
    console.log("Fail to Connect to Mongo Server\n");
  }
}

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.getUserById = getUserById;
module.exports.deleteUser = deleteUser;

module.exports.getUserBudgets = getUserBudgets;
module.exports.createUserBudget = createUserBudget;
module.exports.getUserBudgetById = getUserBudgetById;
module.exports.deleteUserBudget = deleteUserBudget;
