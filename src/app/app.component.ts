import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('textarea', { static: false }) textarea: ElementRef;

  public isFocused = false;

  private maxRows = 5;

  public onInput() {
    const lineHeight = parseFloat(getComputedStyle(this.textarea.nativeElement, null).getPropertyValue('line-height'));
    this.textarea.nativeElement.setAttribute('rows', '1');
    let rows = Math.round(this.textarea.nativeElement.scrollHeight / lineHeight);
    if (rows > this.maxRows) {
      rows = this.maxRows;
    }
    this.textarea.nativeElement.setAttribute('rows', rows);
  }

  public onFocus() {
    this.isFocused = true;
  }

  public onBlur() {
    this.isFocused = false;
  }

  public onKeyDown() {
    // not yet implemented
  }

}
