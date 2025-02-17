import mongoose, {Schema, Document} from "mongoose";

export interface InterfaceUser extends Document {
    username: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

export default mongoose.model<InterfaceUser>('User', UserSchema);