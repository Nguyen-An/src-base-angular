import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { FeatherIconModule } from '../feather-icon/feather-icon.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBoxComponent } from './table-controls/search-box/search-box.component';
import { PageSizeSelectionComponent } from './table-controls/page-size-selection/page-size-selection.component';
import { FormsModule } from '@angular/forms';
import { TableButtonEditComponent } from './table-controls/table-button/table-button-edit/table-button-edit.component';
import { TableButtonDeleteComponent } from './table-controls/table-button/table-button-delete/table-button-delete.component';
import { TableButtonViewComponent } from './table-controls/table-button/table-button-view/table-button-view.component';
import { NgScrollbarModule } from 'ngx-scrollbar';



@NgModule({
	declarations: [
		GenericTableComponent,
		SearchBoxComponent,
		PageSizeSelectionComponent,
		TableButtonEditComponent,
		TableButtonDeleteComponent,
		TableButtonViewComponent
	],
	imports: [
		CommonModule,
		FeatherIconModule,
		NgxPaginationModule,
		FormsModule,
		NgScrollbarModule
	],
	exports: [
		GenericTableComponent,
		SearchBoxComponent,
		PageSizeSelectionComponent,
		TableButtonEditComponent,
		TableButtonDeleteComponent,
		TableButtonViewComponent
	]
})
export class GenericTableModule { }
