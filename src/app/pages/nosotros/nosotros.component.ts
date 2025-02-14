import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  videoId: string = 'HNt0tm-oQ3Y'; // 🔹 Reemplaza con el ID del video que quieres mostrar
  videoTitle: string = 'Video de YouTube'; 
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}
//desde este punto sacamos el con el api el video de youtube
  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }
}

