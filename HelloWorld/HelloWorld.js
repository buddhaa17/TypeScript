var Helloworld = (function () {
    function Helloworld(greeting) {
        this.greeting = greeting;
    }
    Helloworld.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Helloworld;
})();
;
var helloWorldObj = new Helloworld("Hello World Welcome to TypoScript");
document.body.innerHTML = helloWorldObj.greet();
