## Jacqueline Alt Porfolio

### SVG sprites

Gulp task generates **svg-symbols.svg** from which we are taking the id's of individual icons using
```
<svg role="img" class="svg-icon">
    <use xlink:href="img/svg/svg-symbols.svg#phone"></use>
</svg>
```
Make sure the path is correct.

### [gulp imagemin](https://www.npmjs.com/package/gulp-imagemin)