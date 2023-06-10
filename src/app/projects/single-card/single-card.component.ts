import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  
  @ViewChild('singlecard', { static: true }) htmlTemplate?: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
    console.log('data hit here')
    this.httpClient.get('assets/htmlprojects/singleCard/index.html', { responseType: 'text' })
      .subscribe(data => {
        console.log(data)
        if (this.htmlTemplate) {
          this.htmlTemplate.nativeElement.innerHTML = data;
        }
      });

  }
}
