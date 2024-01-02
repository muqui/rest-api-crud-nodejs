//https://www.youtube.com/watch?v=F5oOq-FWUl4&list=PLnfMiP0v59hAUA6QJNKBwKJyq5_gFkCYL&index=1

const app = require('./src/app');



app.listen(app.get('port'), ()=>{
    console.log("Servidor escuchando en el puerto", app.get("port"));
});