import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationBarComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Portfolio';
}

RouterModule.forRoot(routes)
