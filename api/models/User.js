const mongoose = require('mongoose');
const { Schema } = mongoose;
const Types = Schema.Types

const userSchema = new Schema({
    name: { 
        type:  Types.String,
        required: true,
    },
    email: { 
        type:  Types.String,
        required: true,
        index: true,
        unique: true,
        set: function(email) {
            return email.toLowerCase().trim()
        }
    },
    birthDate: { 
        type:  Types.Date,
        required: false,
    },
    emailVerify: {
        type: Types.Boolean,
        required: true
    },
    createdAt: {
        type: Types.Date,
        default: Date.now,
    }
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.__v;
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User