const app = require('express')();

app.get('/', (req,res) =>
    res.json({message: 'Docker first message'})
);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`app is running and listening at http://localhost:${port}`)
})