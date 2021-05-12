const app = require('./config/server')
require('./app/routes/login_register')(app);

// serve port
app.listen(app.get('port'), () => {
    console.log('Serve in port', app.get('port'))
})