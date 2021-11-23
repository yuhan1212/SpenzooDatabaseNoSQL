# CS5200 Project 2 MongoDB

A simple demo application on how to combine node + express + mongodb + EJS

### Application name: Spenzoo

### Team member: YuHan Chi, Tzu-Chi Tai

### Project proposal: Implenting a database for an expense tracking app including the following features:

- CRUD user expenses with customizable details, i.e. date, amount, category, desciption, etc..
- Users can create multiple accounts to better record the payment method used for each transaction. For example, an account named BofA will include all the expenses paid with a Bank of America Credit Card.
- User can set periodical budgets for themselves, with a desired starting date and the duration of the budget cycle.
- The percentage of each expense is set to 100% by default. However, if the user is sharing the bill with other users, manually type in the percentage he/she is paying to split the bill among friends.
- User can view their expenses grouped over categories, period of time, or account.

### Installation

1. Clone the repository
2. `npm install`
3. `npm start`
4. Provide user info to create user
5. Linked user ID to budget ID
6. Click button to delete data

![](B.%20UML%20Class%20Diagram.png)

[LucidChart link for ERD](https://lucid.app/lucidchart/2b9924ee-fb2f-4fab-bcd1-8643e0d98fc2/view)
![](C.%20ER%20Diagram.png)

For the project, we discussed and wrote down the business requirements together, then split the tasks as below:

Hannah Chi @YuHan Chi worked on:
UML Class Diagram
Creating the database with SQLite and writing the queries that represent the key features of our app

Tzu-Chi Tai @Sabrina Tai worked on:
ERD and relational schema
Generating test data with the help of Mockaroo

Then for the point 8, creating a basic Node + Express application, we implemented together by doing pair programming. All commits are made by Hannah because we organized everything to do a checkdown before submitting the final work.
