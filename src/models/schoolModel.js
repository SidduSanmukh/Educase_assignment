const db = require("../config/db");

exports.createSchool = async (data) => {
  const { name, address, latitude, longitude } = data;

  const [result] = await db.execute(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude]
  );

  return result;
};

exports.getAllSchools = async () => {
  const [rows] = await db.execute("SELECT * FROM schools");
  return rows;
};