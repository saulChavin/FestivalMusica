const {series, src, dest}= require('gulp') ;
const sass = require('gulp-sass')(require('sass'));

function css(){
// el src es una funcion q encuentra el scss de una ubicacion
   return src('src/scss/app.scss')
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( dest('./build/css') )
}

exports.css= css;