import express from 'express';
const app = express();

app.use(express.json());
app.use(express.static('BOB/dist/bob/browser'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


