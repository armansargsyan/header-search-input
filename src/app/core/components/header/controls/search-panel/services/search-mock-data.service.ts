import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SearchMockDataService {

  getSearchHistory(): Observable<string[]> {
    return of(['закрепить теги', 'кнопка', 'приложение', 'форма', 'текстовое поле', 'выпадающий список', 'теги', 'список']);
  }

}
