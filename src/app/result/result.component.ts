import { Component, OnInit, Renderer2 } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  trackDetails = []
  embedUrls: any[] = [];
  imageBackgrounds: any = []
  displayedEmbedUrls: any[] = [];  
  itemsPerScroll = 10; 
  dataError: Boolean = false
  showButtons: Boolean = false
  loadingInterval: any;
  isLoading: boolean = false
  loadingTexts: string[] = ['Loading...', 'Looking for songs..', 'getting thing ready..', 'Finalizing..'];
  currentLoadingText: string = this.loadingTexts[0];

  constructor(private searchService: SearchService, private renderer: Renderer2){}

  ngOnInit(): void {
    this.searchService.loading.subscribe(loading => {
      this.isLoading = loading;
      if(this.isLoading){
        this.changeText()
      }else{
        this.stopChangeText()
      }
    });
    this.searchService.queryResponse.subscribe(data=>{
      this.trackDetails = []
      this.embedUrls = []
      this.imageBackgrounds = []
      this.dataError = false
      this.showButtons = false
      if(data.tracks.length >= 20){
        this.trackDetails = data.tracks.slice(0, 20)
      }else{
        this.trackDetails = data.tracks
      }
      this.trackDetails.forEach(trackDetail => {
        this.embedUrls.push(`https://open.spotify.com/embed/track/${trackDetail['trackId']}`);
        this.imageBackgrounds.push(trackDetail['dominantColor'])
      });
      this.displayedEmbedUrls = this.embedUrls.slice(0, this.itemsPerScroll);
      if(this.embedUrls.length == 0){
        this.dataError = true
      }
    })
  }

  onScroll() {
    const start = this.displayedEmbedUrls.length;
    const end = start + this.itemsPerScroll;
    const nextChunk = this.embedUrls.slice(start, end);
    this.displayedEmbedUrls = [...this.displayedEmbedUrls, ...nextChunk];
  }


  onIframeHover(event: MouseEvent) {
    const iframeElement = event.target as HTMLIFrameElement
    const iframeId = parseInt(iframeElement.id, 10)
    const color = this.imageBackgrounds[iframeId] 
    if (color) {
        this.searchService.changeBackground(color)
    }
  }

  changeText(){
    let currentIndex = 1;
    this.loadingInterval = setInterval(() => {
        this.currentLoadingText = this.loadingTexts[currentIndex];
        currentIndex = (currentIndex + 1) % this.loadingTexts.length;
    }, 5000);
  }
  stopChangeText(){
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval)
      this.currentLoadingText = this.loadingTexts[0]
    }
  }

}
