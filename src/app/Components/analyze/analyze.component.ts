import { ContentService } from './../../Services/content.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.css'
})
export class AnalyzeComponent implements OnInit {

  constructor(private contentService : ContentService){}

  ngOnInit(): void {

  }

  simplyIt(): void {
    this.contentService.simplifyIt();
  }


}
