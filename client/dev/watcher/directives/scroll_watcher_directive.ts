import {
  Directive,
  Output,
  EventEmitter
} from 'angular2/core';

@Directive({
  selector: '[scroll-watcher]',
  host: {
    '(window:scroll)': 'scrollHandler()'
  }
})
export class ScrollWatcherDirective {
  private _win: Window = window;

  @Output('topStatus')
  public topStatus: EventEmitter<boolean> = new EventEmitter();

  scrollHandler(ev) {
    if (this._win.document.body.scrollTop > 100) {
      return this.topStatus.emit(false);
    }

    this.topStatus.emit(true);
  }
}
