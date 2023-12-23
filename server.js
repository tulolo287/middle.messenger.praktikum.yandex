import express from 'express';
import reload from 'reload';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

reload(app);
