import { Component } from '@angular/core';
import {Education} from '../models/models'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute : 'Ton Duc Thang University',
      course: 'Software Engineering',
      duration : '2019-2023',
      score: '3.23'
    }
  ]

}
