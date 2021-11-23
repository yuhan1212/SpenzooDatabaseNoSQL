const { MongoClient } = require("mongodb");

async function getSpenzooData() {
	try {
		const myserver = "mongodb://localhost:27017";
		client = new MongoClient(myserver);
		await client.connect();
		console.log("Connect to Mongo Server\n");

		db = client.db("spenzooDB");
		const expenseCollection = await db.collection("expense");

		console.log("Q2: Group all user expenses by category");

		const expenses_by_category = await expenseCollection
			.aggregate([
				{
					$group: {
						_id: "$expense.category",
						total: { $sum: "$expense.amount" },
					},
				},
			])
			.toArray();
		console.log("result:", expenses_by_category.length, "\n");
		console.log(expenses_by_category);
	} finally {
		await client.close();
	}
}

module.exports.getSpenzooData = getSpenzooData;
getSpenzooData();
