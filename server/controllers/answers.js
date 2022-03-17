import mongoose from 'mongoose';
import Answer from '../models/answers.js';
export const readAnswers = async (req, res) => {
try {
const answers = await Answer.find();
res.status(200).json(answers);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createAnswer = async (req, res) => {
const answer = new Answer(req.body);
try {
await answer.save();
res.status(201).json(answer);
} catch (error) {
res.status(409).json({ message: error.message })
}
}