import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private pageTextContent : string = "";

  constructor() { }


  simplifyIt(): void {
    this.initTabContent();
  }

  getPageTextContent(): string {
    return this.pageTextContent;
  }
  setPageTextContent(content: string) {
    this.pageTextContent = content;
  }



  private initTabContent(): void {
    chrome.runtime.sendMessage({ action: "GET_TEXT" }, (response : any) => {
      if (response && response.data) {
        this.pageTextContent = response.data;
        console.log(this.pageTextContent);
      }
    });
  }
}
