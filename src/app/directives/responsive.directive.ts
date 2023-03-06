import { Directive, ElementRef, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[Responsive]',
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              // Mobile & Tablet
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              }
              // PC
              if (breakpoint === Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
  }
}
