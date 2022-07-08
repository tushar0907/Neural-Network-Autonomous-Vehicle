const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 300;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 400;


const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");



const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);



const N = 100;
const cars = generateCars(N);



const traffic = [
    new Car(road.getLaneCenter(1), -100, 50, 80, "DUMMY", 2)
];

animate();

function generateCars(N) {
    const cars = [];
    for (let i = 1; i <= N; i++) {
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
    }
    return cars;
}


function animate(time) {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }

    for (let i = 0; i < cars.length; i++) {
        cars[i].update(road.borders, traffic);
    }


    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;


    carCtx.save();
    carCtx.translate(0, -cars[0].y + carCanvas.height * 0.8);



    road.draw(carCtx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, "black");
    }


    for (let i = 0; i < cars.length; i++) {
        cars[i].draw(carCtx, "blue");
    }

    carCtx.restore();

    requestAnimationFrame(animate);
}