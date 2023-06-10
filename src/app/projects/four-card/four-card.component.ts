import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-four-card',
  templateUrl: './four-card.component.html',
  styleUrls: ['./four-card.component.css']
})
export class FourCardComponent {
  @ViewChild('singlecard', { static: true }) htmlTemplate?: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
    console.log('data hit here')
    this.httpClient.get('assets/htmlprojects/four-card-feature-section-master/index.html', { responseType: 'text' })
      .subscribe(data => {
        console.log(data)
        if (this.htmlTemplate) {
          this.htmlTemplate.nativeElement.innerHTML = data;
        }
      });

  }
}
