// 1. IMPORTAÇÃO DAS FERRAMENTAS (PLUGINS)
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// 2. CRIAÇÃO DAS TAREFAS INDIVIDUAIS

// Tarefa para compilar o SASS e comprimir o CSS final
function compilaSass() {
    // Pega os arquivos de origem na pasta de desenvolvimento
    return gulp.src('./src/styles/main.scss') 
        // Passa os arquivos pelo "cano" do compilador SASS
        .pipe(sass({
            outputStyle: 'compressed' // Comprime o CSS, removendo espaços
        }))
        // Envia o resultado para a pasta de destino (produção)
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa para comprimir o JavaScript
function comprimeJavaScript() {
    return gulp.src('./src/js/*.js') // Pega TODOS os arquivos .js da pasta de origem
        .pipe(uglify()) // Passa pelo 'uglify' para minificar o código
        .pipe(gulp.dest('./dist/js')); // Salva o resultado em dist/js
}

// Tarefa para comprimir as imagens
function comprimeImagens() {
    return gulp.src('./src/images/**/*') // Pega TODAS as imagens em QUALQUER subpasta
        .pipe(imagemin()) // Passa pelo 'imagemin' para otimizá-las
        .pipe(gulp.dest('./dist/images')); // Salva as imagens otimizadas em dist/images
}

// 3. ORQUESTRAÇÃO DAS TAREFAS

// Tarefa 'build' que será executada ao rodar 'gulp build' no terminal.
// gulp.parallel executa todas as tarefas ao mesmo tempo para maior eficiência.
exports.default = gulp.parallel(compilaSass, comprimeJavaScript, comprimeImagens);

// Tarefa 'watch' para automação durante o desenvolvimento.
exports.watch = function() {
    // Fica "observando" a pasta de styles. Se houver mudança, executa a compilação do SASS.
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass));
    gulp.watch('./src/js/*.js', gulp.parallel(comprimeJavaScript));
}