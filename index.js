const dialogflow = require('dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const config = require('C:/Work/GreenPlus/newagent-af9v-8f04ca7d93ba.json');
const projectId = config.projectId
const sessionId = 'bot-session'

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const connection = mysql.createConnection({
	host     : '188.166.223.10',
	user     : 'authapol',
	password : '4150Tainner!',
	database : 'ChatBotForSMEsDB'
  });
  connection.query(
	'SELECT * FROM `Product`',
	function(err, results, fields) {
		temp_prod = results; // results contains rows returned by server
		console.log(temp_prod);
		res.status(200).json({"data":temp_prod})
		
		//console.log(fields); // fields contains extra meta data about results, if available
	}
  );
app.post('/chatbot', async (req, res) => {
  

	const request = {
		session: sessionPath,
		queryInput:{
			text:{
				text: 'มีอะไรข้างบ้าง',
				languageCode: 'en-US',
			}
		}
	}
	const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  res.send(result)

  })