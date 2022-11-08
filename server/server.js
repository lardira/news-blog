import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 6969;

const apiURL = '/api/';
const api = method => apiURL + (method || '');

const app = express();

app.get(api('status'), (req, res) => {
  res.json({ message: 'OK!' });
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
