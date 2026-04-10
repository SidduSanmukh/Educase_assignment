const schoolModel = require("../models/schoolModel");
const calculateDistance = require("../utils/distance");

exports.addSchool = async (data) => {
  return await schoolModel.createSchool(data);
};

exports.getSortedSchools = async (userLat, userLon) => {
  const schools = await schoolModel.getAllSchools();

  const sorted = schools.map((school) => {
    const distance = calculateDistance(
      userLat,
      userLon,
      school.latitude,
      school.longitude
    );

    return { ...school, distance };
  });

  sorted.sort((a, b) => a.distance - b.distance);

  return sorted;
};