import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PersonList } from './phone';
import { OrderPipe } from '../order.pipe';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css'],
  providers: [ OrderPipe, FilterPipe ]
})
export class PhonelistComponent implements OnInit, AfterViewInit {
  public searchKeyword: string;
  public updatedNumber: string;
  clickedUser: any;
  isVisible: boolean = true;
  personList = PersonList;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // debugger;
    this.isVisible = false;
    if(localStorage.getItem('personDetails')) {
      this.clickedUser = JSON.parse(localStorage.getItem('personDetails'));
      this.personList.forEach(item => {
        if(item.name === this.clickedUser.name) {
          item.mobile = this.clickedUser.mobile;
        }
      })
    } else {
      this.clickedUser = this.personList[0];
    }
  }

  onSelectData(data) {
    this.isVisible = false;
    this.clickedUser = data;
    localStorage.setItem('personDetails', JSON.stringify(this.clickedUser));
  }

  getUpdatedNumber(event) {
    // console.log(event);
  }

}
