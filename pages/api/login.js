import connectDb from '../../utils/connectDb';
import User from "../../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      res.status(404).send(`User not found with email ${email}!`);
    }


    if (user.password === password) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' })
      res.status(201).json(token);
    } else {
      res.status(401).send('Incorrect password');
    }


  } catch (error) {
    console.error(error);
    res.status(500).send('Error loggin in user');
  }
}
