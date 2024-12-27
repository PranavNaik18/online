<<<<<<< HEAD
// Controller to fetch behavior reports (detailed data)
=======
// backend/controllers/behaviorController.js
exports.getBehaviorReports = (req, res) => {
    try {
      // Example behavior report data
      const reports = [
        {
          studentName: 'John Doe',
          behaviorRating: 'Good',
          attendance: '90%',
          notes: 'Participates actively in class.'
        },
        {
          studentName: 'Jane Smith',
          behaviorRating: 'Needs Improvement',
          attendance: '80%',
          notes: 'Occasionally distracted in class.'
        }
      ];
      res.json(reports);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch behavior reports.' });
    }
  };
  // backend/controllers/behaviorController.js
exports.getBehaviorSummary = (req, res) => {
    try {
      const summary = {
        totalStudents: 100,
        averageRating: 4.2, // example data
      };
      res.json(summary);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch behavior summary.' });
    }
  };
  // Controller to fetch behavior reports (detailed data)
>>>>>>> ea2f446 (Your commit message)
exports.getBehaviorReports = (req, res) => {
    try {
      const reports = [
        { studentName: 'John Doe', behaviorRating: 'Good', attendance: '90%', notes: 'Participates actively in class.' },
        { studentName: 'Jane Smith', behaviorRating: 'Needs Improvement', attendance: '80%', notes: 'Occasionally distracted in class.' },
      ];
      res.json(reports);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch behavior reports.' });
    }
  };
  
  // Controller to fetch behavior summary (summary data)
  exports.getBehaviorSummary = (req, res) => {
    try {
      const summary = {
        totalStudents: 100,
        averageRating: 4.2, // Example average rating
      };
      res.json(summary);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch behavior summary.' });
    }
  };
  