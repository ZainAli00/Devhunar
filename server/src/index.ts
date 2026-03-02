import { app } from './app';

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Devhunar API running at http://localhost:${PORT}`);
});
