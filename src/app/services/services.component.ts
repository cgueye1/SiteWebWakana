import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl:"./services.component.html",
  styleUrls:['./services.component.css']

})
export class ServicesComponent {
  services = [
    {
      title: 'Développement Web & Mobile',
      description: 'Nous concevons des applications web et mobiles performantes, adaptées aux besoins de votre entreprise. De la conception UX/UI au déploiement, nous utilisons les dernières technologies pour garantir une expérience utilisateur fluide. Nos solutions sont évolutives, sécurisées et optimisées pour tous les appareils. Offrez à vos clients une plateforme intuitive et engageante.',
      image: 'assets/images/dwm.jpeg'
    },
    {
      title: "Intégration de l'Intelligence Artificielle",
      description: "Exploitez la puissance de l'IA pour automatiser vos processus et améliorer vos performances. Nous intégrons des modèles de machine learning et des algorithmes avancés dans vos applications. Analyse de données, assistants virtuels ou recommandations intelligentes : boostez votre productivité grâce à l’IA.",
      image: 'assets/images/iia.jpeg'
    },
    {
      title: 'Solutions Cloud & DevOps',
      description: "Optimisez votre infrastructure avec des solutions cloud adaptées à vos besoins. Nous assurons le déploiement, la gestion et la scalabilité de vos applications via AWS, Azure ou Google Cloud. Grâce à DevOps, nous accélérons vos cycles de développement et garantissons des mises à jour continues en toute sécurité.",
      image: 'assets/images/scd.jpeg'
    },
    {
      title: 'Conseil & Transformation Digitale',
      description: "Accompagnez votre entreprise dans sa transition numérique avec des stratégies innovantes. De l’analyse de vos besoins à la mise en œuvre de solutions technologiques adaptées, nous vous aidons à optimiser vos opérations. Notre expertise vous permet d’accélérer votre croissance et de rester compétitif sur le marché.",
      image: 'assets/images/ctd.jpeg'
    }
  ];
}
