import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';

@Directive({
	selector: 'input[numbersOnly]'
})
export class NumberDirective {
	@Input() isDoubleZero: boolean = false;

	constructor(private _el: ElementRef) { }
	// ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32  || (k >= 48 && k <= 57));
	@HostListener('input', ['$event']) onInputChange(event: any) {
		let initalValue = this._el.nativeElement.value;
		if (this.isDoubleZero) {
			if (/^00/.test(initalValue)) {
				initalValue = initalValue.replace(/^00/, "0")
			}
		}
		this._el.nativeElement.value = initalValue.replace(/[^0-9,]*/g, '');
		if (initalValue !== this._el.nativeElement.value) {
			event.stopPropagation();
		}
	}
}