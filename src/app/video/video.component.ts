import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent {

  cambiarVolumen(event: any, video: HTMLVideoElement): void {
    const volumen = event.target.value
    video.volume = volumen / 100
  }
}
