import connectDb from '../../utils/connectDb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await user.findOne({ email });
    if (user) {
      res.status(422).send(`User already exists with email ${email}!`);
    }
    const hash = await bcrypt.hash(password, 5);
    const newUser = await new User({
      name,
      email,
      password: hash
    }).save();
    console.log({newUser});
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '3d' })
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user. Please try again later.")
  }
}
