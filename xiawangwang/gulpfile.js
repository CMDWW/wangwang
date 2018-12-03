
var gulp=require('gulp');



//2.布置任务：压缩css文件
var cssmin=require('gulp-cssmin');
gulp.task('cssmin',function(){
  return gulp.src('css/*.css')
  			 .pipe(cssmin())
  			 .pipe(gulp.dest('dist/css'));
});




//4.压缩js并重命名
var uglify=require('gulp-uglify');

gulp.task('uglify',function(){
  return gulp.src('js/*.js')
  			 .pipe(uglify())
  			 .pipe(gulp.dest('dist/js'));
});




//6.压缩图片

var imagemin=require('gulp-imagemin');

gulp.task('imgmin',function(){
  return gulp.src('img/*')
  			 .pipe(imagemin())
  			 .pipe(gulp.dest('dist/img'));
});

gulp.task('default',['uglify','cssmin','imgmin'],function(){
  console.log(123);
});


