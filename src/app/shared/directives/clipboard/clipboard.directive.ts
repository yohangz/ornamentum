import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClipboard]'
})
export class ClipboardDirective  {
  @Input()
  public appClipboard: string;

  @HostListener('click')
  public onCopyToClipboard(): void {
    const textAreaElement = document.createElement('textarea');
    textAreaElement.value = this.appClipboard;
    textAreaElement.setAttribute('readonly', '');
    textAreaElement.style.position = 'absolute';
    textAreaElement.style.left = '-9999px';
    document.body.appendChild(textAreaElement);

    textAreaElement.select();
    document.execCommand('copy');
    document.body.removeChild(textAreaElement);
  }
}
