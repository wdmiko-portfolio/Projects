import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-info',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgFor, NgIf],
  templateUrl: './cards-info.component.html',
  styleUrl: './cards-info.component.css',
})
export class CardsInfoComponent {
  myinfo: any[] = [
    {
      type: 'experience',
      title: 'Experiencia',
      url: 'assets/img/icons/ash.png',
      content: [
        {
          title: 'Laboral',
          description: '3 años en desarrollo web',
        },
        // {
        //   title: 'Rol',
        //   description: 'Fullstack Web Developer',
        // },
        {
          title: '',
          description:
            'He participado en proyectos presenciales y remotos, aportando soluciones enfocadas en el desarrollo de software. También he colaborado como freelancer, desarrollando proyectos con distintos frameworks, contribuyendo a la mejora de funcionalidades y la creación de componentes.',
        },
      ],
    },
    {
      type: 'habilidades',
      title: 'Habilidades',
      url: 'assets/img/icons/pokeball.png',
      content: [
        'Trabajo en equipo presencial y a distancia',
        'Buen manejo del trabajo bajo presión',
        'Resolución de problemas y creatividad',
        'Versátil en entornos de desarrollo, con facilidad para comprender y adaptar código existente',
        'Capacidad para aprender y aplicar nuevas tecnologías rápidamente',
      ],
    },
  ];
}
