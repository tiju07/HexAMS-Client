import { NgModule, Directive, HostListener, Input, Output, EventEmitter, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
export class InputTextarea {
    el;
    ngModel;
    control;
    cd;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize;
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize = new EventEmitter();
    filled;
    cachedScrollHeight;
    ngModelSubscription;
    ngControlSubscription;
    constructor(el, ngModel, control, cd) {
        this.el = el;
        this.ngModel = ngModel;
        this.control = control;
        this.cd = cd;
    }
    ngOnInit() {
        if (this.ngModel) {
            this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
        if (this.control) {
            this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
    }
    ngAfterViewInit() {
        if (this.autoResize)
            this.resize();
        this.updateFilledState();
        this.cd.detectChanges();
    }
    onInput(e) {
        this.updateState();
    }
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    resize(event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = 'scroll';
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = 'hidden';
        }
        this.onResize.emit(event || {});
    }
    updateState() {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    }
    ngOnDestroy() {
        if (this.ngModelSubscription) {
            this.ngModelSubscription.unsubscribe();
        }
        if (this.ngControlSubscription) {
            this.ngControlSubscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InputTextarea, deps: [{ token: i0.ElementRef }, { token: i1.NgModel, optional: true }, { token: i1.NgControl, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: InputTextarea, selector: "[pInputTextarea]", inputs: { autoResize: "autoResize" }, outputs: { onResize: "onResize" }, host: { listeners: { "input": "onInput($event)" }, properties: { "class.p-filled": "filled", "class.p-inputtextarea-resizable": "autoResize" }, classAttribute: "p-inputtextarea p-inputtext p-component p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InputTextarea, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pInputTextarea]',
                    host: {
                        class: 'p-inputtextarea p-inputtext p-component p-element',
                        '[class.p-filled]': 'filled',
                        '[class.p-inputtextarea-resizable]': 'autoResize'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.NgModel, decorators: [{
                    type: Optional
                }] }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { autoResize: [{
                type: Input
            }], onResize: [{
                type: Output
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
export class InputTextareaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InputTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: InputTextareaModule, declarations: [InputTextarea], imports: [CommonModule], exports: [InputTextarea] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InputTextareaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InputTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputTextarea],
                    declarations: [InputTextarea]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0YXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dHRleHRhcmVhL2lucHV0dGV4dGFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBeUUsTUFBTSxlQUFlLENBQUM7QUFFNUwsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7OztHQUdHO0FBU0gsTUFBTSxPQUFPLGFBQWE7SUFxQkg7SUFBbUM7SUFBcUM7SUFBNEI7SUFwQnZIOzs7T0FHRztJQUNNLFVBQVUsQ0FBc0I7SUFDekM7Ozs7T0FJRztJQUNPLFFBQVEsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUU5RSxNQUFNLENBQXNCO0lBRTVCLGtCQUFrQixDQUFxQjtJQUV2QyxtQkFBbUIsQ0FBMkI7SUFFOUMscUJBQXFCLENBQTJCO0lBRWhELFlBQW1CLEVBQWMsRUFBcUIsT0FBZ0IsRUFBcUIsT0FBa0IsRUFBVSxFQUFxQjtRQUF6SCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQXFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBcUIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUcsQ0FBQztJQUVoSixRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixHQUFJLElBQUksQ0FBQyxPQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHFCQUFx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LGFBQWEsYUF1RlosWUFBWSxhQXZGYixhQUFhO3dHQTJGYixtQkFBbUIsWUFKbEIsWUFBWTs7MkZBSWIsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwsIE5nQ29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIElucHV0VGV4dGFyZWEgYWRkcyBzdHlsaW5nIGFuZCBhdXRvUmVzaXplIGZ1bmN0aW9uYWxpdHkgdG8gc3RhbmRhcmQgdGV4dGFyZWEgZWxlbWVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BJbnB1dFRleHRhcmVhXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtaW5wdXR0ZXh0YXJlYSBwLWlucHV0dGV4dCBwLWNvbXBvbmVudCBwLWVsZW1lbnQnLFxuICAgICAgICAnW2NsYXNzLnAtZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR0ZXh0YXJlYS1yZXNpemFibGVdJzogJ2F1dG9SZXNpemUnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRhcmVhIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgdGV4dGFyZWEgc2l6ZSBjaGFuZ2VzIGFzIGJlaW5nIHR5cGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9SZXNpemU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIHRleHRhcmVhIHJlc2l6ZS5cbiAgICAgKiBAcGFyYW0geyhFdmVudCB8IHt9KX0gZXZlbnQgLSBDdXN0b20gcmVzaXplIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEV2ZW50IHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudCB8IHt9PigpO1xuXG4gICAgZmlsbGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgY2FjaGVkU2Nyb2xsSGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBuZ01vZGVsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG5cbiAgICBuZ0NvbnRyb2xTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHVibGljIG5nTW9kZWw6IE5nTW9kZWwsIEBPcHRpb25hbCgpIHB1YmxpYyBjb250cm9sOiBOZ0NvbnRyb2wsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5nTW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbiA9ICh0aGlzLm5nTW9kZWwgYXMgYW55KS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sU3Vic2NyaXB0aW9uID0gKHRoaXMuY29udHJvbCBhcyBhbnkpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvUmVzaXplKSB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAgIG9uSW5wdXQoZTogRXZlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZpbGxlZFN0YXRlKCkge1xuICAgICAgICB0aGlzLmZpbGxlZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2l6ZShldmVudD86IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBpZiAocGFyc2VGbG9hdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0KSA+PSBwYXJzZUZsb2F0KHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLm1heEhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KGV2ZW50IHx8IHt9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5uZ01vZGVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2xTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucHV0VGV4dGFyZWFdLFxuICAgIGRlY2xhcmF0aW9uczogW0lucHV0VGV4dGFyZWFdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dGFyZWFNb2R1bGUge31cbiJdfQ==