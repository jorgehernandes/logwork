const { promisify } = require('util');

const gapi = require('googleapis');
const gsheets = gapi.sheets('v4');
const key = require('./keys/LogWork-04cbe7313912.json');

const jwtClient = new gapi.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'], // an array of auth scopes 
  null
);

const authorize = promisify(jwtClient.authorize);
const sheetsGet = promisify(gsheets.spreadsheets.values.get);

(async function() {
  try {

    let linhas = await sheetsGet({
      spreadsheetId: '1y9pRKiqncE9mXjsJqZR_VUyB4EH1_KC5BnzpNYluDzY',
      range: 'FT2017!A2:G1000',
      auth: jwtClient
    });
        
    console.log(linhas);

  } catch (e) {

    console.log(e);
    
  }
})();
