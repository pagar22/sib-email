
const express = require('express');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config()

const app = express();


//send email endpoint
app.post("/sendemail", (req, resp, next) => {
    const email = req.query.email
    let apikey = process.env.SIB_API_KEY

    //auth
    let client = SibApiV3Sdk.ApiClient.instance;
    let apiKey = client.authentications['api-key']
    apiKey.apiKey = apikey

    //create contact
    let apiInstance = new SibApiV3Sdk.ContactsApi()
    let createContact = new SibApiV3Sdk.CreateContact()
    createContact.email = email
    createContact.listIds = [2]

    apiInstance.createContact(createContact).then((data) => {
        resp.status(200)
        console.log(data)
        resp.send("success! =)")
    }, function (error) {
        resp.status(500)
        console.log(error)
        resp.send("failed")
     })

})

//frontend endpoint
app.use((req, resp, next) => {
    resp.sendFile(__dirname + "/index.html")
})

app.listen(5000, () => {
    console.log("I'm running on 5000!")
})
