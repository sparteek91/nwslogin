import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

//DIRECTIVES
import { NumberDirective} from "./directives";

// Components
import { InfoPopupComponent } from './modals/info-popup/info-popup.component';

@NgModule({
    exports: [
        NumberDirective
    ],
    imports: [
        CommonModule,
    ],
    declarations: [
        NumberDirective,
        InfoPopupComponent
    ],
    providers: [],
})
export class SharedModule { }
