import { afterEveryRender, afterNextRender, Component, OnChanges, OnInit, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit, OnChanges {

  traditionalProperty = 'Eliexer';
  signalProperty = signal('Eliexer');

  constructor() {
    log('Constructor llamado');

     // setTimeout(() => {
     //   this.signalProperty.set('Pepito Ochoa');
     // }, 2000);
  }

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.")
  }

  ngOnChanges() {
    log('ngOnCHanges', "Runs every time the component's inputs have changed.")
  }

  ngDoCheck() {
    log('ngDoCheck', "Runs every time this component is checked for changes.")
  }

  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.")
  }

  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.")
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes")
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked', "Runs every time this component content has been checked for changes")
  }

  ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
   }

  afterNextRenderEffect = afterNextRender(() => {
     log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  afterRender = afterEveryRender(() => {
    log(
      'afterRender',
      'Runs every time all components have been rendered to the DOM.'
    );
  });

}
