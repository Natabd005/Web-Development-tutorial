import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = ' ';
  Servername = 'Apollo';
  ServerPid = 11;
  ServerStatus = 'offline';
  statusflag = false;
  buttonState = true;
  state = false;
  flag = true;
  studentroster = ['Suhani', 'Kushal', 'Anyone'];
  currentName = '';
  count = [];

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus () {
    this.statusflag = !this.statusflag;
    if(this.statusflag === true){ //to check if they are exactly true
      this.ServerStatus = 'online';
    }
    else{
      this.ServerStatus='offline';
    }

    return this.ServerStatus;
  }

  toggleReset () {
    this.name = ' ';
  }

  checkname () {
    if (this.name === '') {
      this.state = !this.state;
      return this.state;
    }
  }

  toggleFlag () { 
    this.flag = !this.flag;
    this.count.push(this.count.length + 1);
  }

  getlength () {
    if(this.count.length > 4){
      return 'blue';
    }
    else{
      return 'black';
    }
  }

  getcolor () {
    if(this.flag === true){
      return 'green';
    }
    else{
      return 'red';
    }
  }

  add () {
    this.studentroster.push(this.currentName);
  }
}

