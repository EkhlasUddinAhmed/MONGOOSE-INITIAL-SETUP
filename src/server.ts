import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);
    app.listen(config.PORT, () => {
      console.log('DataBase Connection SuccessFull');
      //   console.log(`Server is listening on port ${config.PORT}`);
      //   console.log("DB_LINK is:", config.DATABASE_URL);
    });
  } catch (err) {
    console.log({ ConnectionError: err });
  }
}

main();
