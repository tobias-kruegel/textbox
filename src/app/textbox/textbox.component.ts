import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'mydatev-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit, AfterViewInit {

  @ViewChild('textarea', { static: false }) textarea: ElementRef;
  @Input() maxRows: number;
  @Input() maxLength: number;

  public isFocused = false;
  private lineHeight: number;

  ngOnInit(): void {
    this.maxRows = this.maxRows || 5;
    this.maxLength = this.maxLength || 2000;
  }

  ngAfterViewInit(): void {
    this.lineHeight = parseFloat(getComputedStyle(this.textarea.nativeElement, null).getPropertyValue('line-height'));
  }

  public onInput() {
    this.textarea.nativeElement.setAttribute('rows', '1');
    let rows = Math.round(this.textarea.nativeElement.scrollHeight / this.lineHeight);
    if (rows > this.maxRows) {
      rows = this.maxRows;
    }
    this.textarea.nativeElement.setAttribute('rows', rows.toString());
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
