import { Component, OnInit } from '@angular/core';
import { EnvService } from '@agency-x/config/frontend';
import { ILanguage } from '@agency-x/shared/shared';

@Component({
  selector: 'agency-x-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  public languages: ILanguage[];
  public selectedLanguage: ILanguage;

  constructor(envService: EnvService) {
    this.languages = envService.languages;
    this.selectedLanguage = this.languages.find((el) => el.isDefault);
  }
  changeLanguage(lang: ILanguage) {
    window.location.href = lang.href + window.location.pathname;
  }
  ngOnInit(): void {}
}
