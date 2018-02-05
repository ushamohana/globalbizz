import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent, EventsComponent, GalleryComponent]
})
export class DashboardModule { }
