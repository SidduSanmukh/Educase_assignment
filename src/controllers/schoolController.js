const schoolService = require("../services/schoolService");

exports.addSchool = async (req, res, next) => {
  try {
    await schoolService.addSchool(req.body);

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.listSchools = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude are required",
      });
    }

    const schools = await schoolService.getSortedSchools(
      parseFloat(latitude),
      parseFloat(longitude)
    );

    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools,
    });
  } catch (err) {
    next(err);
  }
};