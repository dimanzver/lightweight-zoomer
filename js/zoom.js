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
        //check for image not should be zoomed
        if(zoomOverlayImage.width <= zoomImage.offsetWidth){
            zoomOverlayImage.classList.add('light-zoom-image-hidden');
            return;
        }else{
            zoomOverlayImage.classList.remove('light-zoom-image-hidden');
        }

        let rect = zoomBlock.getBoundingClientRect();
        let posX = e.touches ? e.touches[0].clientX : e.clientX,
            posY = e.touches ? e.touches[0].clientY : e.clientY,
            x = posX - rect.left,
            y = posY - rect.top;

        let relativeX = x / rect.width,
            relativeY = y / rect.height;

        let offsetX = relativeX * (zoomOverlayImage.width - rect.width);
        let offsetY = relativeY * (zoomOverlayImage.height - rect.height);
        zoomOverlayImage.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
        zoomOverlayImage.style.oTransform = `translate(${-offsetX}px, ${-offsetY}px)`;
        zoomOverlayImage.style.mozTransform = `translate(${-offsetX}px, ${-offsetY}px)`;
        zoomOverlayImage.style.msTransform = `translate(${-offsetX}px, ${-offsetY}px)`;
        zoomOverlayImage.style.webkitTransform = `translate(${-offsetX}px, ${-offsetY}px)`;
    }
}