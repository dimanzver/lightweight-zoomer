# lightweight-zoomer
Lightweight image zoomer on Vanilia JS without dependences, adaptive for touch devices

# How to use
HTML template (It is neccessary to wrap img in container with class "light-zoom"):
```html
<div class="light-zoom light-zoom-js">
    <img src="img/galaxy-space-stars-universe-nebula-4k-qw-2560x1600.jpg" alt="Demo image">
</div>
```

Just import css/zoom.css and js/zoom.js. Then init zoomer by zoomImage function
```js
import zoomImage from './zoom.js';

let zoomBlock = document.querySelector('.light-zoom-js');
zoomImage(zoomBlock);
```

# Demo
[Watch demo](https://dimanzver.github.io/lightweight-zoomer/)
