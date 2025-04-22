
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('diagram');
    const point = document.getElementById('kitty-point');

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    document.addEventListener('mousemove', (event) => {
        const scaleX = containerWidth / window.innerWidth;
        const scaleY = containerHeight / window.innerHeight;

        const scaledX = event.clientX * scaleX;
        const scaledY = event.clientY * scaleY;

        const halfW = point.offsetWidth / 2;
        const halfH = point.offsetHeight / 2;

        const clampedX = Math.max(0, Math.min(containerWidth - halfW, scaledX - halfW));
        const clampedY = Math.max(0, Math.min(containerHeight - halfH, scaledY - halfH));

        point.style.left = `${clampedX}px`;
        point.style.top = `${clampedY}px`;
    });
});