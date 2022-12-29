const { model, models, Schema } = require("mongoose");

const loginSchem = new Schema({
  name: String,
  email: String,
  password: String,
});

const Login = models.login || model("login", loginSchem);

export default Login;
