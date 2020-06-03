import { NgModule } from '@angular/core';
import {TooltipDirective, TooltipService} from './tooltip';

@NgModule({
  declarations: [TooltipDirective],
  imports: [],
  exports: [TooltipDirective],
  providers: [TooltipService]
})
export class ArxjsModule { }
