import connectDb from '../../utils/connectDb';
import User from "../../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(422).send(`User already exists with email ${email}!`);
    }
    // const hash = await bcrypt.hash(password, 5);

    const newUser = await new User({
      name,
      email,
      password
    }).save();

    // const salt = await bcrypt.genSalt(10);
    // newUser.password = await bcrypt.hash(password, salt);

    // await newUser.save()

    console.log({newUser});
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '3d' })
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user. Please try again later.")
  }
}
