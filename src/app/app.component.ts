import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,MenubarModule,CardModule,TimelineModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Sreeram';
  items: MenuItem[] | undefined;
  events: any[] | undefined;

    ngOnInit() {
      this.items = [
        {
          label: 'Sreeram Charagundla', 
          icon: 'pi pi-user'
        },
        {
          label: 'Experience',
          icon: 'pi pi-history',
          command: () => this.scrollToTimeline()
        },
        {
            label: 'Skills',
            icon: 'pi pi-cog',
        },
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-server',
        },
        {
            label: 'Resume',
            icon: 'pi pi-file',
            command: () => {
              window.open('/assets/SreeramCharagundla.pdf', '_blank');
          }
        }
    ];

    this.events = [
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      },
      {
        status: 'Software Engineer at Infosys',
        date: 'Jan 2021 - Dec 2022',
        description: 'Backend development for the Tax Filing portal Government of India. Implemented a Kafka mechanism for data handling and Spring Boot for computations.',
        icon: 'pi pi-briefcase',
        color: '#007ad9'
      }
      // Add more events here
    ];
    }
  // scrollToTimeline(): void {
  //   const timelineElement = document.getElementById('timeline');
  //   timelineElement?.scrollIntoView({behavior: 'smooth', block: 'start'});
  // }

  scrollToTimeline(): void {
    const timelineElement = document.getElementById('timeline');
    const menubarElement = document.getElementById('menubar');
    if (timelineElement && menubarElement) {
      const menubarHeight = menubarElement.offsetHeight;
      const yOffset = -menubarHeight; // Use the menubar's height as the offset
      const y = timelineElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

    navigate(destination: string) {
      switch (destination) {
        case 'email':
          window.location.href = 'mailto:charagundla.s@northeastern.edu';
          break;
        default:
          console.log('Invalid destination');
      }
    }

    
}
