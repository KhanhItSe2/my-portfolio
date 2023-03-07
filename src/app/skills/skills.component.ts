import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {title:"Front-end",name: 'HTML, CSS, JS'},
    {title:"Framework",name: 'Angular'},
    {title:"Back-end",name: 'NodeJS, PHP'},
    {title:"Database",name: 'SQL, MongoDB'},
    {title:"Other", name:'Java, Python, Git'}
  ];
}
