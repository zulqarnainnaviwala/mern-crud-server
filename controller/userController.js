import User from "../model/userSchema.js";

export async function addUser(req, res) {
  const user = req.body;
  // console.log(user)  //this console will print "undefined" , reason is k express|node by default post api me any waly body ko parse nh kr pata , then we need to add body-parse package and parse the body in middleware in index.js
  console.log(user); // if successfully configured body parser

  const newUser = new User(user);

  // to add user we need to handle error
  try {
    // newUser.save();
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  try {
    // const user = await User.find({_id:req.params.id});
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function editUser(req, res) {
  //first validate the coming object in body
  let user = req.body;
  const editUser = new User(user);
  try {
    //updateOne takee to parameters 1: object identification to replace  2: that updated object
    const user = await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

deleteUser;
export async function deleteUser(req, res) {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
