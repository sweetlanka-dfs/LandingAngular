import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  // title = 'SMSTermin';
  pages: any[];
  title: string;
  newList: any[];

  constructor(private translate: TranslateService, private api: ApiService) {
    translate.setDefaultLang('ru');
  }

  ngOnInit() {
    this.getForecastArray();
  }

  getForecastArray() {
    this.api.sendPostRequest().subscribe((data: any[]) => {
      console.log(data);
      this.pages = data;
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
