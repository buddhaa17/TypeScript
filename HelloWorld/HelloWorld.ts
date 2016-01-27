class Helloworld{
	
	constructor(public greeting: string){

	}

	greet(){

		return "<h1>" + this.greeting + "</h1>";
	}

};

var helloWorldObj = new Helloworld("Hello World Welcome to TypoScript");

document.body.innerHTML = helloWorldObj.greet();