var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, data) => {
        console.log(data);
        if(err) throw err;
        returnObj = [];
        data.forEach(function(val){
          returnObj.push({
          objectId: val.objectId,
          username: val.name,
          text: val.message,
          roomname: val.roomName,
          createdAt: null
          })
        })
        res.json({results: returnObj})
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post( (err) => {
        if(err) throw err;
        res.end();
      }, req.body)

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( (err, data) => {
        if(err) throw err;
        returnObj = [];
        data.forEach(function(val){
          username: val.name
          })
        })
        res.json({results: returnObj})
      },

    post: function (req, res) {
        models.users.post( (err) => {
        if(err) throw err;
        res.end();
      }, req.body)
    }
  }
};

