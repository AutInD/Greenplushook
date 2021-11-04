const dialogflow = require('dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const config = require('../config/keys');
const projectId = config.googleProjectID
const sessionId = config.dialogflowFlowSessionID
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


app.post('/chatbot', (req, res) => {
  async function runSample(projectId = 'newagent-af9v'){
    const sessionId = uuid.v4();
  }



})