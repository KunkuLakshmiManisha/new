import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  
  public firstName: string|any;
  public lastName: string|any;
  public PassedoutYear: number|any;
  public rows: Array<{firstName: string, lastName: string, PassedoutYear: number}> = [];
  buttonClicked() {
    this.rows.push( {firstName: this.firstName, lastName: this.lastName, PassedoutYear: this.PassedoutYear } );

  }
  ngOnInit(): void {
  }

}
