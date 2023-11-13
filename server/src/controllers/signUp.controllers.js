import singUp_Model from "../models/singUp.models.js";

const singUpUser = async (req, resp) => {
  try {
    let userData = await singUp_Model(req.body);
    let result = await userData.save();
    resp.send(result);
    console.log("signup successful");
  } catch (error) {
    console.log("error occurred at signup ~~~~", error.message);
    if (error.code === 11000 && error.keyPattern.email) {
      resp.status(400).json({ error: "Email address is already in use." });
    } else {
      resp
        .status(500)
        .json({ error: "An error occurred while creating the user." });
    }
  }
};

const singInUser = async (req, resp) => {
  try {
    let userData = await singUp_Model.findOne(req.body);
    if (!userData) {
      resp.status(404).send("user not available");
    }
    resp.send(userData);
    console.log("sign in successful");
  } catch (error) {
    console.log("error occurred at signing a user ~~~>", error.message);
    resp.json({ message: "error occurred at signing " });
    process.exit(1);
  }
};

export { singInUser, singUpUser };
