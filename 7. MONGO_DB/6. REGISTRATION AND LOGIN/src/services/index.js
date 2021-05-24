const home = (req, res) => {
  res.render("index");
};

const login = (req, res) => {
  res.render("login");
};

const registration = (req, res) => {
  res.render("registration");
};

const success = (req, res) => {
  res.render("success");
};

module.exports = { home, login, registration,success };
