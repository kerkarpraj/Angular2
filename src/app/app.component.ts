import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: `app/app.component.html`  
})

export class AppComponent  { 
   
    appTitle: String = 'Welcome';
    appStatus: boolean = false;
    appList: any[]=[{
      "ID":"1",
      "Name":"One"
    },
    {
      "ID":"2",
      "Name":"Two"
    }];
        
 }


