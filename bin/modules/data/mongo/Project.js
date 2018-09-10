const mongoose = require('./conn');

const Project = new mongoose.Schema({
  user_id: String
});

Project.index({ user_id: 1 });

module.exports = mongoose.model('Project', Project);
