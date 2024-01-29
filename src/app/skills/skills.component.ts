// skills.component.ts
import { Component, ElementRef, OnInit, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as d3 from 'd3';

interface SkillNode {
  name: string;
  children?: SkillNode[];
  value?: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @ViewChild('treeContainer', { static: true }) treeContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createBubbleChart();
    }
  }
  createBubbleChart() {
    const skillsData: SkillNode = {
      name: 'Skills',
      children: [
        { name: 'TypeScript', value: 150 },
        { name: 'NodeJs', value: 150 },
        { name: 'Angular', value: 100 },
        { name: 'HTML', value: 100 },
        { name: 'MongoDB', value: 100 },
        { name: 'Express.js', value: 80 },
        { name: 'Python', value: 80 },
        { name: 'Java', value: 60 },
        { name: 'D3', value: 50 },
        { name: 'React', value: 40 },
        { name: 'CSS', value: 40 },
        
      ]
    };
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const svg = d3.select(this.treeContainer.nativeElement)
      .append('svg')
      .attr('width', screenWidth)
      .attr('height', screenHeight);
  
    const bubble = d3.pack<SkillNode>()
      .size([800, 800])
      .padding(5);
  
    const rootNode = d3.hierarchy(skillsData)
      .sum(d => d.value || 0);

  
    const bubbleData = bubble(rootNode);
  
    const nodes = svg.selectAll('.node')
      .data(bubbleData.descendants().slice(1)) // Exclude the root node
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`);
  
    nodes.append('circle')
      .attr('r', d => d.r)
      .style('fill', '#69b3a2')
      .style('opacity', 0.7);
  
    nodes.append('text')
      .attr('dy', '.3em')
      .style('text-anchor', 'middle')
      .text(d => d.data.name)
      .style('fill', 'white');
  }
}