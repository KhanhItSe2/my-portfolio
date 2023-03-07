import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  myInfo: string[][] = [
    ['Name', 'Nguyen An Khanh'],
    ['DOB', '21-04-2001'],
    ['Education', 'Ton Duc Thang University (K23)'],
    ['Location','VN, Ho Chi Minh City '],
    ['Interests', 'Gym, Football and Read'],
  ];

  aboutMe: string[] = [
    "Hi, I'm currently a senior student at Ton Duc Thang University. My major is Software Engineering.",
    'I have finished several website projects at school as well as my personal projects. Delivered all products within deadlines. Always eager to learn new technologies.',
    'I have experience in using HTML, CSS, JavaScript, NodeJS and Angular.',
    "Currently, I'm looking forward to a front-end developer intern with Angular",
  ];
}
