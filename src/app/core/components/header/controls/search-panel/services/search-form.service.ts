import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';


export type SearchForm = FormGroup<{
  text: FormControl<string>;
  author: FormControl<string>;
  participant: FormControl<boolean>;
  strictSearch: FormControl<boolean>;
  titlesOnly: FormControl<boolean>;

  only: FormGroup<{
    tags: FormControl<boolean>;
    requests: FormControl<boolean>;
    contacts: FormControl<boolean>;
  }>;
}>
@Injectable()
export class SearchFormService {
  private readonly fb = inject(NonNullableFormBuilder);

  initForm(): SearchForm {
    return this.fb.group({
      text: ["", Validators.required],
      author: [""],
      participant: [false],
      strictSearch: [false],
      titlesOnly: [false],
      only: this.fb.group({
        tags: false,
        requests: false,
        contacts: false,
      })
    });
  }

}
