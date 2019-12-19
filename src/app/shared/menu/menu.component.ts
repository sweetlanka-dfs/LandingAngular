import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedDay: string = '';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  ngOnInit() {

  }
  checkData(event: any) {
    alert("TEST");
  debugger;
    this.selectedDay = event.target.value;

  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
