// // move to db connection
let mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/sampleDB?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;
// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

const projectCollection = db.collection("basicCRUD");

// projectController.js
// Import project model
Project = require("./projectModel");
// Handle index actions
exports.index = function (req, res) {
  Project.get(function (err, projects) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Projects retrieved successfully",
      data: projects,
    });
  });
};
// Handle create project actions
exports.new = function (req, res) {
  var project = new Project();
  project.name = req.body.name ? req.body.name : project.name;
  project.duration = req.body.duration;
  project.type = req.body.type;
  project.technologies = req.body.technologies;
  // save the project and check for errors
  project.save(function (err) {
    // if (err)
    //     res.json(err);

console.log(req.body)
    projectCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))


    res.json({
      message: "New project created!",
      data: project,
    });
  });
};
// Handle view project info
exports.view = function (req, res) {
  Project.findById(req.params.project_id, function (err, project) {
    if (err) res.send(err);
    res.json({
      message: "Project details loading..",
      data: project,
    });
  });
};
// Handle update project info
exports.update = function (req, res) {
  Project.findById(req.params.project_id, function (err, project) {
    if (err) res.send(err);
    project.name = req.body.name ? req.body.name : project.name;
    project.duration = req.body.duration;
    project.type = req.body.type;
    project.technologies = req.body.technologies;
    // save the project and check for errors
    project.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Project Info updated",
        data: project,
      });
    });
  });
};
// Handle delete project
exports.delete = function (req, res) {
  Project.remove(
    {
      _id: req.params.project_id,
    },
    function (err, project) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Project deleted",
      });
    }
  );
};
