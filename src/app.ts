import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('WELCOME TO OUR SITE');
});

console.log('Learn web development in good round terms');
export default app;
