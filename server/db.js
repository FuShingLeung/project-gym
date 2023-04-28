const mongoose = require('mongoose');

const { DB_URL = 'mongodb://127.0.0.1:27017/exercises' } = process.env;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('DB Connected');
  } catch (err) {
    console.log(err);
  }
}
