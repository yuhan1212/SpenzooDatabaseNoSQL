const { MongoClient } = require("mongodb");

async function getSpenzooData() {
	try {
		const myserver = "mongodb://localhost:27017";
		client = new MongoClient(myserver);
		await client.connect();
		console.log("Connect to Mongo Server\n");

		db = client.db("spenzooDB");
		const expenseCollection = await db.collection("expense");

		console.log(
			"Q1: Counting total number of expense recorded by a sepcific user"
		);

		const count_expense_recorded = await expenseCollection
			.find({ "account.user.userId": "3a744bfa-300c-421c-a20e-51769af73ae2" })
			.toArray();
		console.log("result:", count_expense_recorded.length, "\n");
		console.log(count_expense_recorded);
	} finally {
		await client.close();
	}
}

module.exports.getSpenzooData = getSpenzooData;
getSpenzooData();
