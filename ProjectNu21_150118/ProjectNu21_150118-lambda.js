let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	console.log("Event triggered ", event);

	ddb.put({
		TableName: 'api_nuwanthi21',
		Item: { id: '1', first_name: 'nuwanthi', last_name: 'yapa' }
	}, function (err, data) {
		if (err) {
			console.log("Error ", err);
		} else {
			console.log("Data ", data);
		}
	});


	callback(null, 'Successfully executed');
}