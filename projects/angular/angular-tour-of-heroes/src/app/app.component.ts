export class Hero {
	id: number;
	name: string;
}
//create a hero class with id and name properties
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //on template call hero.name instead because we are setting it below
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
})
export class AppComponent  {
 name = 'Angular'; 
 title = 'Tour of Heroes';
//set hero components to be type of hero and initialize with id of 1 and name 
 hero: Hero = {
   id: 1,
   name: 'Windstorm'
 };
}

