import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Movie On',
      technologies: 'Angular',
      description: [
        'This is the first Angular-app project that I learned by myself. I used API of moviedb to call for my website. The movie app to show list of movies with different genres and it has search function to filter movie and detail pages of movie',
      ],
      link: 'https://movie-on-clone.netlify.app/',
    },
    {
      title: 'Landing Page The Band',
      technologies: 'HTML/CSS, JavaScript',
      description: ['Personal Project'],
      link: 'https://khanhitse2.github.io/the-band-clone/',
    },
    {
      title: 'Home Page Shopee',
      technologies: 'HTML/CSS, JavaScript',
      description: [
        'Personal Project',
      ],
      link: 'https://khanhitse2.github.io/home-shopee-clone/',
    },

    {
      title: 'Knux-coin Wallet',
      technologies: 'HANDLEBARS, NODEJS, CSS',
      description: [
        'This was a final project of advanced web programming subject at school. It was called Knux-Coin Wallet (a digital wallet on the website). In the project, we had 3 members and my role was a leader. We had to finish in 3 weeks Therefore, I divided each member who handles each function for each object: User, Admin and Wallet, including front-end and back-end and uploading to Git as well as reporting the progress of each member in the group chat. We used NodeJS, Handlebars and MongoDB. My role was to design DB and write the front-end/back-end for the Admin site to check the permission of Users (unblock, register, check status account) and check the wallet status for Users (withdraw, recharge, transfer)',
      ],
      link: 'https://github.com/KhanhItSe2/knux-coin-wallet',
    },
  ];
}
