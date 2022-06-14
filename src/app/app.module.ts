import { NgModule } from '@angular/core';
import {ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService,
  DateTimeService, ScrollBarService, ColumnSeriesService, 
  ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,
} from '@syncfusion/ej2-angular-charts';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService, SortService, FilterService, GroupService,} from '@syncfusion/ej2-angular-grids';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    AngularChartsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    ChartModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService, PageService,
    SortService,
    FilterService,
    GroupService,
    DateTimeService, ScrollBarService, ColumnSeriesService, 
  ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
