import mongoos from 'mongoos';

const UserSchema = new mongoos.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	profileImage: {
		type: String,
		default: "",
	},
	chats: {
		type: [{ type: mongoose.Schema.Type.PbjectId, ref: "Chat" }],
		default: [],
	},
});

const User = mongoos.models.User || mongoose.model('User', UserSchema);

export default User;