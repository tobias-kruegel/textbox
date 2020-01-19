import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit, AfterViewInit {

  @ViewChild('textarea', { static: false }) textarea: ElementRef;
  @Input() maxRows: number;
  @Input() maxLength: number;
  @Input() placeholder: string;
  @Input() value: string;

  public isFocused = false;
  public isError = false;

  private lineHeight: number;

  ngOnInit(): void {
    this.maxRows = this.maxRows || 5;
    this.maxLength = this.maxLength || 2000;
  }

  ngAfterViewInit(): void {
    this.lineHeight = Math.floor(parseFloat(getComputedStyle(this.textarea.nativeElement, null).getPropertyValue('line-height')));
    this.textarea.nativeElement.style.lineHeight = this.lineHeight + 'px';
    this.textarea.nativeElement.style.fontSize = (this.lineHeight - 4) + 'px';
    this.textarea.nativeElement.style.height = this.lineHeight + 'px';
    this.textarea.nativeElement.value = this.value;
  }

  public onInput() {
    // this.textarea.nativeElement.setAttribute('rows', '1');
    console.log(this.textarea.nativeElement.scrollHeight);
    this.textarea.nativeElement.style.height = (this.lineHeight) + 'px';
    let rows = Math.round(this.textarea.nativeElement.scrollHeight / this.lineHeight);
    if (rows > this.maxRows) {
      rows = this.maxRows;
    }
    // this.textarea.nativeElement.setAttribute('rows', rows.toString());
    this.textarea.nativeElement.style.height = (rows * this.lineHeight) + 'px';
    // this.textarea.nativeElement.style.padding = '4px';
    this.isError = this.textarea.nativeElement.value.length > this.maxLength;
  }

  public onFocus() {
    this.isFocused = true;
  }

  public onBlur() {
    this.isFocused = false;
  }

}
