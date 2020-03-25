export default function (zoomBlock) {
    let zoomImage = zoomBlock.querySelector('img');

    let zoomOverlayImage = new Image();
    zoomOverlayImage.src = zoomImage.src;
    zoomOverlayImage.className = 'light-zoom-image';
    zoomBlock.appendChild(zoomOverlayImage);

    zoomBlock.addEventListener('mousemove', bindZoomMove);
    zoomBlock.addEventListener('mouseover', bindZoomMove);
    zoomBlock.addEventListener('touchstart', bindZoomMove);



    function bindZoomMove(e) {
        if(zoomOverlayImage.width <= zoomImage.offsetWidth){
            zoomOverlayImage.style.display = 'none';
            return;
        }else{
            zoomOverlayImage.style.display = '';
        }
        let posX = e.touches ? e.touches[0].pageX : e.pageX,
            posY = e.touches ? e.touches[0].pageY : e.pageY,
            x = posX - zoomBlock.offsetLeft,
            y = posY - zoomBlock.offsetTop;

        let relativeX = x / zoomBlock.offsetWidth,
            relativeY = y / zoomBlock.offsetHeight;

        let offsetX = relativeX * (zoomOverlayImage.width - zoomBlock.offsetWidth);
        let offsetY = relativeY * (zoomOverlayImage.height - zoomBlock.offsetHeight);
        zoomOverlayImage.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
    }
}