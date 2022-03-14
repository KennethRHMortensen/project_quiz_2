const mongoUtil = require("../models/mongoUtil");
const User = require("../models/Quiz");

module.exports = {
  // query for users and sorting parameters
    getUser: async function (query, sort) {
    const db = await mongoUtil.mongoConnect(); // connect
    const users = await User.find(query, null, sort); // find and read users collection, sorted
    db.close(); // close connection, so we don't have multiple open or leave a hole
    return users;
  }
};
