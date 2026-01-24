const db = require("../data/database");

function getSignup(req, res) {
  res.json({ users: ["userOne"] });
}
async function getHome(req, res) {
  try {
    const userData = await db.getDb().collection("user").findOne({
      email: "pullingogandhi@xmail.com",
    });
    if (!userData) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.json(userData);
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getSignup: getSignup,
  getHome: getHome,
};
