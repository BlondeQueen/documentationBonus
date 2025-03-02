import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const benefits = [
    "Augmentez l'engagement utilisateur",
    "Fidélisez votre clientèle",
    "Encouragez les comportements souhaités",
    "Différenciez-vous de la concurrence",
    "Collectez des données précieuses",
    "Personnalisez l'expérience utilisateur"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos de <span className="text-amber-500">BonusAPI</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              BonusAPI est une solution complète pour intégrer un système de bonification dans votre application. 
              Notre API vous permet de créer, gérer et suivre des points, des récompenses et des règles de bonification 
              sans avoir à développer cette infrastructure complexe vous-même.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Que vous souhaitiez fidéliser vos clients, encourager certains comportements ou simplement 
              ajouter une dimension ludique à votre application, BonusAPI vous offre tous les outils nécessaires.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                <Link href="https://github.com/Momo-azangue/bonusapi" target="_blank">
                  Voir sur GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/Momo-azangue/App-Bonus" target="_blank">
                  Application d'exemple <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Système de points et récompenses" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-600/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}