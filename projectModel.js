var mongoose = require('mongoose');
// Setup schema
var projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    type: String,
    technologies: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Project model
var Project = module.exports = mongoose.model('project', projectSchema);
module.exports.get = function (callback, limit) {
    Project.find(callback).limit(limit);
}