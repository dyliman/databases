var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, data) => {
        if(err) throw err;
        console.log(data)
        returnObj = {objectId: data[0].objectId, username: data[0].name, text: data[0].message, roomname: data[0].roomName, createdAt:'2018-06-27T23:29:32.572Z'
        }
        res.json({results: [returnObj]})
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body)
      models.messages.post( (err) => {
        if(err) throw err;
      }, req.body)

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

