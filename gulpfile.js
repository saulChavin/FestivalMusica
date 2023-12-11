const {series, src, dest,watch}= require('gulp') ;
const sass = require('gulp-sass')(require('sass'));
const imagemin= require('gulp-imagemin');
function css(){
// el src es una funcion q encuentra el scss de una ubicacion
   return src('src/scss/app.scss')
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( dest('./build/css') )
}
function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

function minificarcss() {
    return src('src/scss/app.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(dest('./build/css'))
}
function watchArchivos(){
    watch('src/scss/**/*.scss',css); //! * =  la carpeta actual - ** = todos los archivos con esa extension
}
exports.css= css;
exports.imagenes = imagenes;
exports.watchArchivos=watchArchivos; 