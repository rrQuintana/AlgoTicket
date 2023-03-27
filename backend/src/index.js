const app = require('./app');

// Lógica para ejecutar el servidor
async function main(err){
    await app.listen(app.get('port'));
    if (err) console.error(err);
    console.log('Server listening on port', app.get('port'));
}

main();