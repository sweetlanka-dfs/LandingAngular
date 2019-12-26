import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedLang = '';
  userLang: string;
  defaultLang: string;
  languages: any[] = ['ru', 'en', 'de'];

  constructor(private translate: TranslateService) {
    const self = this;
    self.userLang = navigator.language.split('-')[0];
    if (self.userLang === 'ru') {
      this.defaultLang = 'ru';
    } else if (self.userLang === 'de'){
      this.defaultLang = 'de';
    } else {
      this.defaultLang = 'en';
    }
    this.selectedLang = this.defaultLang;
    translate.setDefaultLang(this.defaultLang);
  }

  ngOnInit() {

  }
  getLangValue(event: any) {
    const language = event.target.innerText;
    this.selectedLang = language;
    this.useLanguage(language.trim().toLowerCase());
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
