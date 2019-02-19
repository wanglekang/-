let gulp = require("gulp");
let sass = require("gulp-sass");
let webserver = require("gulp-webserver");
gulp.task("sass", function() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css/"))
});

gulp.task("wacth", function() {
    gulp.watch("./src/sass/*.scss", gulp.series("sass"));
});
gulp.task("webserver", function() {
    return gulp.src("./src/")
        .pipe(webserver({
            port: 8080,
            open: true
        }))
});
gulp.task("dev", gulp.parallel("wacth", "webserver"));