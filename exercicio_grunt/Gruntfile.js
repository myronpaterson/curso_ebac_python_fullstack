// Arquivo: Gruntfile.js

module.exports = function(grunt) {
    // Inicializa a configuração do Grunt
    grunt.initConfig({
        // --- Tarefa 1: Compilar o LESS para CSS ---
        less: {
            // "target" de desenvolvimento
            development: {
                files: {
                    // Onde o arquivo final será salvo : Qual arquivo original usar
                    'build/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        // --- Tarefa 2: Comprimir o JavaScript ---
        uglify: {
            // "target" de build
            build: {
                files: {
                    // Onde o arquivo final será salvo : Qual arquivo original usar
                    'build/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    });

    // Carrega os plugins do Grunt que farão o trabalho
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Define a tarefa padrão, que será executada quando você rodar "grunt" no terminal
    // Esta tarefa vai executar o 'less' e o 'uglify' em sequência.
    grunt.registerTask('default', ['less', 'uglify']);
};