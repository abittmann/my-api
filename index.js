const app = require('./app')
const port = 3001;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})