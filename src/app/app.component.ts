import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PortfoilPreviewComponent } from './components/portfoil/portfoil-preview/portfoil-preview.component';
import { NumberValueAccessor } from '@angular/forms';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

interface Tool {
  name: string;
  url: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PokedexComponent,
    PortfoilPreviewComponent,
    PersonalInfoComponent,
    NgFor,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Debe ser un array
})
export class AppComponent implements OnInit {
  currentIndex: number = 0;
  arrTools: any = [];
  imagesProject: any = [];
  descriptionProject: any = [];
  titleProject: string = '';
  toolList: { name: string; url: string }[] = [];

  tools: any = {
    front: {
      react: { name: 'React', url: 'img/dev-tools/react-icon.png' },
      angular: { name: 'Angular', url: 'img/dev-tools/angular-icon-1.png' },
      capacitor: {
        name: 'Capacitor',
        url: 'img/dev-tools/capacitor-icon.png',
      },
      ionic: { name: 'Ionic', url: 'img/dev-tools/ionic-icon.png' },
      wordpress: {
        name: 'Wordpress',
        url: 'img/dev-tools/wordpress-icon.png',
      },
      tailwind: {
        name: 'Tailwind CSS',
        url: 'img/dev-tools/tailwind-icon.png',
      },
      bootstrap: {
        name: 'Bootstrap',
        url: 'img/dev-tools/bootstrap-icon.png',
      },
      html: {
        name: 'HTML',
        url: 'img/dev-tools/html-icon.png',
      },
      css: {
        name: 'CSS',
        url: 'img/dev-tools/css-icon.png',
      },
    },
    backend: {
      nest: { name: 'NestJS', url: 'img/dev-tools/nest-icon.png' },
      next: { name: 'NextJS', url: 'img/dev-tools/next-icon.png' },
      laravel: { name: 'Laravel', url: 'img/dev-tools/laravel-icon.png' },
      django: { name: 'Django', url: 'img/dev-tools/django-icon.png' },
    },
    storage: {
      postgres: {
        name: 'PostgresSQL',
        url: 'img/dev-tools/postgres-icon.png',
      },
      firebase: {
        name: 'Firebase',
        url: 'img/dev-tools/firebase-icon.png',
      },
      sql: {
        name: 'MySQL',
        url: 'img/dev-tools/sql-icon.png',
      },
      prisma: {
        name: 'Prisma',
        url: 'img/dev-tools/prisma.png',
      },
      aws: {
        name: 'AWS',
        url: 'img/dev-tools/aws.png',
      },
      git: {
        name: 'GitHub',
        url: 'img/dev-tools/github.png',
      },
    },
    lenguages: {
      java: {
        name: 'Java',
        url: 'img/dev-tools/java-icon.png',
      },
      ts: {
        name: 'TypeScript',
        url: 'img/dev-tools/ts-icon.png',
      },
      js: {
        name: 'JavaScript',
        url: 'img/dev-tools/js-icon.png',
      },
      php: {
        name: 'PHP',
        url: 'img/dev-tools/php-icon.png',
      },
    },
  };

  projects: any = [
    {
      title: 'SAP - CECyTEM',
      description: '',
      images: [
        { url: 'img/projects-images/cecytem/cecy-d.png', position: true },
        { url: 'img/projects-images/cecytem/cecy-m.png', position: false },
      ],
      tools: [
        this.tools.front.angular,
        this.tools.backend.laravel,
        this.tools.lenguages.php,

        this.tools.storage.postgres,
        this.tools.front.bootstrap,
        this.tools.lenguages.ts,
        this.tools.storage.git,
      ], // Next como fullstack
    },
    {
      title: 'Principal Page - CDEFIS',
      description: '',
      images: [
        { url: 'img/projects-images/cdfis/cdefis1.png', position: true },
        { url: 'img/projects-images/cdfis/cdefis2.png', position: false },
      ],
      tools: [
        this.tools.front.react,
        this.tools.backend.next,
        this.tools.lenguages.ts,
        this.tools.front.tailwind,
        this.tools.storage.aws,
        this.tools.storage.git,
      ],
    },
    {
      title: 'Principal Page - HalfMooonBayRvResort',
      description: '',
      images: [
        { url: 'img/projects-images/wordpress/wordpress.png', position: true },
        {
          url: 'img/projects-images/wordpress/wordpress2.png',
          position: false,
        },
      ],
      tools: [
        this.tools.front.wordpress,
        this.tools.storage.sql,
        this.tools.lenguages.php,
        this.tools.lenguages.js,
        this.tools.front.css,
      ],
    },
    {
      title: 'Edu Riec - CDEFIS',
      description: '',
      images: [
        { url: 'img/projects-images/cdfis/edu1.png', position: true },
        {
          url: 'img/projects-images/cdfis/edu2.png',
          position: false,
        },
      ],
      tools: [
        this.tools.front.react,
        this.tools.front.tailwind,
        this.tools.backend.next,
        this.tools.storage.postgres,
        this.tools.storage.prisma,
        this.tools.lenguages.ts,
        this.tools.storage.aws,
        this.tools.storage.git,
      ],
    },
  ];
  categories = Object.keys(this.tools);

  ngOnInit(): void {
    this.arrTools = this.projects[0].tools;
    this.titleProject = this.projects[0].title;
    this.imagesProject = this.projects[0].images;
  }

  nextProject(): void {
    console.log(this.projects.length);
    if (this.currentIndex != this.projects.length - 1) {
      this.currentIndex++;
      const projectInfo = this.projects[this.currentIndex];
      this.arrTools = projectInfo.tools;
      this.titleProject = projectInfo.title;
      this.imagesProject = projectInfo.images;
      console.log('project', projectInfo);
    } else {
      return;
    }
  }
  prevProject(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const projectInfo = this.projects[this.currentIndex];
      this.arrTools = projectInfo.tools;
      this.titleProject = projectInfo.title;
      this.imagesProject = projectInfo.images;
      console.log('project', projectInfo);
    } else {
      return;
    }
  }
  rotateProject() {}

  // Función que transforma objetos en arrays
  getToolsArray(section: any): Tool[] {
    return Object.values(section) as Tool[];
  }
}
