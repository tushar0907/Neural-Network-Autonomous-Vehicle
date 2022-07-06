const canvas = document.getElementById("myCanvas");
canvas.width = 300;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 50, 80);

animate();

function animate() {
    car.update();

    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}