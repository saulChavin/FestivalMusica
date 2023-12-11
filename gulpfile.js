const {series, src, dest,watch}= require('gulp') ;
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require( 'gulp-notify');
const webp = require('gulp-webp');

const paths= {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
}

function css(){
// el src es una funcion q encuentra el scss de una ubicacion
   return src(paths.scss)
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( dest('./build/css') );
}
function imagenes(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Imagen Minificada'}));
}

function minificarcss() {
    return src(paths.scss)
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(dest('./build/css'))
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Version webp lista'}));
}


function watchArchivos(){
    watch(paths.scss,css); //! * =  la carpeta actual - ** = todos los archivos con esa extension
}
exports.css= css;
exports.imagenes = imagenes;
exports.watchArchivos=watchArchivos; 

exports.default = series(css,imagenes,versionWebp, watchArchivos);