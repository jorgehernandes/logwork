const { promisify } = require('util');

var gapi = require('googleapis');
var gsheets = gapi.sheets('v4');
var key = require('./keys/LogWork-04cbe7313912.json');

sheetsGet = promisify(gsheets.spreadsheets.values.get);

var jwtClient = new gapi.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'], // an array of auth scopes 
  null
);
 
jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }
 
  sheetsGet({
    spreadsheetId: '1y9pRKiqncE9mXjsJqZR_VUyB4EH1_KC5BnzpNYluDzY',
    range: 'FT2017!A2:G1000',
    auth: jwtClient
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });

});