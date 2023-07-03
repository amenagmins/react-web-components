const gulp = require("gulp");
const inlinesource = require("gulp-inline-source");
const replace = require("gulp-replace");
const del = require("del");

gulp.task("init", () => {
  return gulp
    .src("./build/*.html")
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(
      inlinesource({
        compress: true,
        ignore: ["png"],
      })
    )
    .pipe(gulp.dest("./build"));
});

gulp.task("clean", () => {
  return del([
    "build/static/js",
    "build/static/css",
    "build/asset-manifest.json",
  ]);
});

gulp.task("default", gulp.series("init", "clean"));
