import { Directive, Input, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[arxjsTooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input()
  tooltipTitle;

  @Input()
  placement;

  private id: string;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.id = Math.random().toString();
    this.tooltipService.components.push({
      id: this.id,
      ref: this.element,
      title: this.tooltipTitle,
      placement: this.placement
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    const idx = this.tooltipService.components.findIndex((t) => t.id === this.id);

    this.tooltipService.components.splice(idx, 1);
  }

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }
}
