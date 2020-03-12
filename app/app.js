var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("engine started: " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("engine started: " + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car("v8");
    car.start();
    car.stop();
};
