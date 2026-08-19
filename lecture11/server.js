const express = require('express');
const app = express();
const port = 3000;
app.get('/students', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.query.cgpa);
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
