import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-column-preview-card',
  templateUrl: './column-preview-card.component.html',
  styleUrls: ['./column-preview-card.component.css']
})
export class ColumnPreviewCardComponent implements OnInit {

  private isMobile: boolean;
  // private width: number;

  constructor(private ApplicationState: ApplicationStateService) { 
    this.isMobile = ApplicationState.getIsMobileResolution();
  }

  ngOnInit(): void {
    if(this.isMobile){

    }
  }

}
