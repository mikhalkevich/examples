module.exports = function(grunt) {

    // ������
    grunt.initConfig({
        // ��������� js
        concat: {
            main: {
                src: [
                    'js/jquery.js',
                    'js/**/*.js'  // ��� JS-����� � �����
                ],
                dest: 'build/gruntscripts.js'
            }
        },
       // ��������� css
	cssmin: {
		  combine: {
			files: {
			  'path/to/output.css': 
              ['path/to/input_one.css', 'path/to/input_two.css']
			}
		  }
		},
        // �������
        uglify: {
            main: {
                files: {
                    // ��������� ������ concat
                    'build/gruntscripts.min.js': '<%= con-cat.main.dest %>'
                }
            }
        }
    });

    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // ������ �� ���������
    grunt.registerTask('default', ['concat', 'uglify', �cssmin�]);
};
