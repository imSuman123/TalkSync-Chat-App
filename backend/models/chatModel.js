const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}
    , {
    timestamps: true,
}
)

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;






//chatName
//isGroupChat
//users -- Basically are the members that are the part of the chat, means 2 member in single comm and more than 2 for group comm.
//latestMessage
//groupAdmin