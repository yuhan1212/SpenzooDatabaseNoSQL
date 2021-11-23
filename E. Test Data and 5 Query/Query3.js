const { MongoClient } = require("mongodb");

async function getSpenzooData() {
	try {
		const myserver = "mongodb://localhost:27017";
		client = new MongoClient(myserver);
		await client.connect();
		console.log("Connect to Mongo Server\n");

		db = client.db("spenzooDB");
		const expenseCollection = await db.collection("expense");

		console.log("Q3: Ranking users by their spending amount");

		const rank_5 = await expenseCollection
			.aggregate([
				{
					$group: {
						_id: "$account.user.userId",
						amount: { $sum: "$expense.amount" },
					},
				},
				{ $sort: { amount: -1 } },
				{ $limit: 5 },
			])
			.toArray();
		console.log("result:", rank_5.length, "\n");
		console.log(rank_5);
	} finally {
		await client.close();
	}
}

module.exports.getSpenzooData = getSpenzooData;
getSpenzooData();
