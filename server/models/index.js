var db = require('../db');

module.exports = {
  messages: {

    get: function (callback) {
      db.server.query('SELECT m.message, r.roomName, u.name, m.objectId, m.createdAt FROM messages m, rooms r, users u WHERE m.user_id = u.id AND m.room_id = r.id', (err, result) => {
        callback(err, result)
      })

    }, // a function which produces all the messages

    post: function (callback, message) {
      message.createdAt = new Date().toJSON();
      db.server.query(`INSERT INTO users (id, name) VALUES (null, '${message.username}');` , (err) => {
        if(err) callback(err)


      })
        db.server.query(`INSERT INTO rooms (id, roomName) VALUES (null, '${message.roomname}');` , (err) => {
          if(err) callback(err)
        })


      db.server.query(`INSERT INTO messages (objectId, user_id, message, room_id, createdAt) VALUES (null, (SELECT u.id FROM users u WHERE '${message.username}'=u.name), '${message.text}', (SELECT r.id FROM rooms r WHERE '${message.roomname}'=r.roomName), null);` , (err) => {
        if(err) callback(err)
      })

    } // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


// INSERT INTO rooms (id, roomName) VALUES (null, ${message.roomname});
//  INSERT INTO messages (objectId, user_id, message, room_id, createdAt) VALUES (null, (SELECT u.id FROM users u WHERE ${message.username}=u.name), ${message.text}, (SELECT r.id FROM rooms r WHERE ${message.roomname}=r.roomName), ${message.createdAt});