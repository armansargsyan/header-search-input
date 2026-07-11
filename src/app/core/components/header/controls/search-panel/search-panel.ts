import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { SearchFormService, SearchMockDataService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { UserMockDataService } from '../../../../services';
import { SharedControls } from '../../../../../shared/controls';
import { delay, distinctUntilChanged, of, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-panel',
  imports: [ReactiveFormsModule, FormsModule, AsyncPipe, SharedControls],
  templateUrl: './search-panel.html',
  styleUrl: './search-panel.css',
  providers: [SearchFormService, SearchMockDataService]
})
export class SearchPanel {
  private readonly searchFormService = inject(SearchFormService)
  protected readonly mockDataService = inject(SearchMockDataService);
  private readonly userService = inject(UserMockDataService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly searchForm = this.searchFormService.initForm();
  protected readonly isOpened = signal(false);
  protected readonly isSearchButtonVisible = toSignal(
    toObservable(this.isOpened).pipe(
      distinctUntilChanged(),
      delay(400),
      switchMap(isOpened =>of(isOpened))
    )
  )
  protected readonly isAdvancedSearchOpened = signal(false);

  @HostListener('document:pointerdown', ['$event'])
  protected onDocumentPointerDown(event: PointerEvent): void {
    if (!this.isOpened()) {
      return;
    }
    const target = event.target;

    if (!(target instanceof Node)) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.close();
    }
  }

  toggle() {
    this.isOpened.update((value) => !value);
  }

  close() {
    this.isOpened.set(false);
    this.isAdvancedSearchOpened.set(false);
    this.searchForm.reset();
  }

  onMeButtonClick() {
    const userName = this.userService.user()?.name ?? ''
    this.searchForm.controls.author.patchValue(userName);
  }

  useHistory(text: string) {
    this.searchForm.controls.text.patchValue(text);
  }

  submitForm() {
    if (this.searchForm.invalid || this.searchForm.pending) return;
    this.close();
  }
}
