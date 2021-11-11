const gulp = require('gulp');
const gap = require('gulp-append-prepend');

gulp.task('licenses', async function () {
  // this is to add Nairo Mudumane licenses in the production mode for the minified js
  gulp
    .src('build/static/js/*chunk.js', { base: './' })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Black Dashboard React - v0.0.0
=========================================================

* Product source: https://github.com/nairo-mudumane/takdir-admin-dashboard/black-dashboard-react
* Copyright 2021 Nairo Mudumane (https://nairomudumane.vercel.app/)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Nairo Mudumane

=========================================================

*/`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Nairo Mudumane licenses in the production mode for the minified html
  gulp
    .src('build/index.html', { base: './' })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product source: https://github.com/nairo-mudumane/takdir-admin-dashboard/black-dashboard-react
* Copyright 2020 Nairo Mudumane (https://www.nairomudumane.vercel.app)
* Licensed under MIT (https://github.com/nairo-mudumane/takdir-admin-dashboard/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Nairo Mudumane

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Nairo Mudumane licenses in the production mode for the minified css
  gulp
    .src('build/static/css/*chunk.css', { base: './' })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product source: https://github.com/nairo-mudumane/takdir-admin-dashboard/black-dashboard-react
* Copyright 2020 Nairo Mudumane (https://www.nairomudumane.vercl.app)
* Licensed under MIT (https://github.com/nairo-mudumane/takdir-admin-dashboard/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Nairo Mudumane

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));
  return;
});
