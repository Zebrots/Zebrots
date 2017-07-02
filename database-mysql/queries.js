var db = require('./index');

var queryDatabase = function(query) {
  return new Promise((resolve, reject) => {
    db.query(query, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


var selectAllUsers = function() {
  return queryDatabase('SELECT handle, email, avatar_url FROM users');
};


var selectAll = function(table) {
  return queryDatabase(`SELECT * FROM ${table}`);
};


var createUser = function(user) {
  return queryDatabase(`INSERT INTO users (id, handle, email, avatar_url, github_token)  
                        VALUES (null, '${user.login}', '${user.email}', '${user.avatar_url}', '${user.github_token}')`);
};


var selectUser = function(attribute) {
  return queryDatabase(`SELECT id, email, handle, avatar_url FROM users WHERE ${attribute.field} = '${attribute.value}'`);
};

var createTopic = function(topic, userId) {
  return queryDatabase(`INSERT INTO topics (user_q_id, topic)
                        VALUES (${userId}, '${topic}')`);
};


var selectAllTakeaways = function() {
  return queryDatabase('SELECT null, takeaways.topic, takeaways.date, takeaways.takeaway, users.handle AS inviter, (SELECT users.handle FROM users WHERE users.id=takeaways.user_A_id) AS collaborator FROM takeaways INNER JOIN users ON takeaways.user_id=users.id;');
};


var createTakeaway = function(takeaway) {
  return queryDatabase(`INSERT INTO takeaways (id, topic, date, takeaway, user_id, user_A_id)  
                        VALUES (null, '${takeaway.topic}', '${takeaway.date}', '${takeaway.takeaway}', '${takeaway.user_id}', '${takeaway.user_A_id}')`);
};

module.exports = {
  selectAllUsers: selectAllUsers,
  selectAll: selectAll,
  selectUser: selectUser,
  createUser: createUser,
  createTopic: createTopic,
  selectAllTakeaways: selectAllTakeaways,
  createTakeaway: createTakeaway
};


/*

DROP TABLE IF EXISTS `TAKEAWAYS_QUERY`;

CREATE TABLE `TAKEAWAYS_QUERY` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(50) NOT NULL,
  `date` DATETIME NOT NULL,
  `takeaway` VARCHAR(255) NOT NULL,
  `inviter` VARCHAR(30) NOT NULL,
  `collaborator` VARCHAR(30) NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO takeaways_query
SELECT null, takeaways.topic, takeaways.date, takeaways.takeaway, users.handle, 
	
    (SELECT users.handle 
     FROM users
     WHERE users.id=takeaways.user_A_id)
    
FROM takeaways
INNER JOIN users
ON takeaways.user_id=users.id;


*/