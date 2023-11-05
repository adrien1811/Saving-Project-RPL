const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  forumTitle: {
    type: String,
    required: true,
  },
  forumContent: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  comments: [
    {
      comment: {
        type: String,
      },
      replies: [
        {
          reply: {
            type: String,
          },
        },
      ],
    },
  ],
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
