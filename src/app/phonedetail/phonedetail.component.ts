import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css']
})
export class PhonedetailComponent implements OnInit, OnChanges {
  clickedUser: any;
  phoneNumber: string;
  @Input() personData: any;
  @Output() numberUpdated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.phoneNumber = "";
    this.clickedUser = this.personData;
  }

  updateNumber(num) {
    this.numberUpdated.emit(this.clickedUser.mobile = num);
  }

}
