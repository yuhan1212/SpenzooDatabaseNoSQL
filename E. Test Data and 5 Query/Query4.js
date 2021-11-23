const { MongoClient } = require("mongodb");

async function getSpenzooData() {
	try {
		const myserver = "mongodb://localhost:27017";
		client = new MongoClient(myserver);
		await client.connect();
		console.log("Connect to Mongo Server\n");

		db = client.db("spenzooDB");
		const expenseCollection = await db.collection("expense");

		console.log("Q4: List the expenses of California man");

		const count_expense_recorded = await expenseCollection
			.aggregate([
				{
					$match: {
						$and: [
							{ "account.user.gender": "Male" },
							{ "account.user.state": "CA" },
						],
					},
				},
				{
					$group: {
						_id: "$account.user.userId",
						amount: { $sum: "$expense.amount" },
					},
				},
				{ $limit: 10 },
			])
			.toArray();
		console.log("result:", count_expense_recorded.length, "\n");
		console.log(count_expense_recorded);
	} finally {
		await client.close();
	}
}

module.exports.getSpenzooData = getSpenzooData;
getSpenzooData();
