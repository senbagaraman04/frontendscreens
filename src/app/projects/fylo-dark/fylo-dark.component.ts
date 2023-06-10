 import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fylo-dark',
  templateUrl: './fylo-dark.component.html',
  styleUrls: ['./fylo-dark.component.css']
})
export class FyloDarkComponent {
  @ViewChild('singlecard', { static: true }) htmlTemplate?: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
  
    this.httpClient.get('assets/htmlprojects/fylo-dark-theme-landing-page-master/index.html', { responseType: 'text' })
      .subscribe(data => {
        console.log(data)
        if (this.htmlTemplate) {
          this.htmlTemplate.nativeElement.innerHTML = data;
        }
      });

  }
}
