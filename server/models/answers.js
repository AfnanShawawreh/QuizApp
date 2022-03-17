import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const answerSchema = new Schema({
name: {
type: String,
required: true
},
value: {
    type: String,
    required: true
    }
}, { timestamps: true });
const Answer = mongoose.model('Answer', answerSchema)
export default Answer;