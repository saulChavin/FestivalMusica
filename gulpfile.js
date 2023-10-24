const {series}= require('gulp') ;

function css(done){
    console.log('Compilando .... CSS');
    done();
}
function javaScript(done){
    console.log('Compilando .... JavaScript');
    done();
}

exports.css = css;
exports.javaScript = javaScript;
// series te prmite ejecutar varias funciones
exports.tareas = series(css, javaScript);