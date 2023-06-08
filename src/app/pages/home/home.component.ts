import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  ngOnInit(): void{
      this.ensureVideoPlays();
  }
  
private ensureVideoPlays(): void{
  const video = document.querySelector("video");

  if(!video) return;
  
  const promise = video.play();
  if(promise !== undefined){
      promise.then(() => {
          // Autoplay started
      }).catch(error => {
          // Autoplay was prevented.
          video.muted = true;
          video.play();
      });
  }
}
}
