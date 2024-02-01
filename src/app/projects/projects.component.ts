import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  images = [
    { url: 'assets/project-images/chat-visualizer.png', alt: 'Chat Visualizer', description: "Part of the course Basics of Data Visualizations. \n Full Discription in the github repository below. \n", github: "https://github.com/CreaTorAlexander/gdv-projekt-chat-visualizer-" },
    { url: 'assets/project-images/planung-ausstellung-website.png', alt: 'Conception of an Exhibition', description: "Developed a web interface prototype to enhance our pitch presentation for the 'Cities of the Future' exhibition. This was part of the interdisciplinary University class 'Conception of an Exhibition' ", github: "https://github.com/CreaTorAlexander/Planung-Ausstellung-Prototyp" },
    { url: 'assets/project-images/fingerprint-extractor.png', alt: 'Fingerprint Extractor', description: "Project during the Multimedia Retrieval Class. We had to extract features from fingerprint images.", github: "https://github.com/CreaTorAlexander/Project-Multimedia-Retrieval" },
    { url: 'assets/project-images/pixel-art-maker.png', alt: 'Pixel Art Maker' , description: "Fun project, you can create, pixel based images in the web browser." , github: "https://github.com/CreaTorAlexander/pixelartmaker" },
    
  ];

  modalOpen = false;
  selectedImage: any;

  openModal(image: any): void {
    console.log('Open modal called');
    this.modalOpen = true;
    this.selectedImage = image;
  }
  
  closeModal(): void {
    console.log('Close modal called');
    this.modalOpen = false;
    this.selectedImage = null;
  }
}
