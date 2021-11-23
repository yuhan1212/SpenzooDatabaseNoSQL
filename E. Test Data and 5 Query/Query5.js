const { MongoClient } = require("mongodb");

async function getSpenzooData() {
	try {
		const myserver = "mongodb://localhost:27017";
		client = new MongoClient(myserver);
		await client.connect();
		console.log("Connect to Mongo Server\n");

		db = client.db("spenzooDB");
		const expenseCollection = await db.collection("expense");

		console.log("Q5: Ranking users by their spending amount");

		const count_expense_recorded = await expenseCollection;
		updateMany(
			{ "expense.category": "Miscellaneous" },
			{
				$set: { "expense.description": "This is a miscellaneous transcation." },
			},
			{ multi: true }
		);
		console.log(count_expense_recorded);
	} finally {
		await client.close();
	}
}

module.exports.getSpenzooData = getSpenzooData;
getSpenzooData();
