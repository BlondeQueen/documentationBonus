import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift, Star, Award, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">Système de bonification simplifié</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transformez votre application avec un système de 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600"> points et récompenses</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
            BonusAPI vous permet d'intégrer facilement un système complet de points, 
            récompenses et règles de bonification dans votre application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
              <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank">
                Voir Documentation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">
                Découvrir les fonctionnalités <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Gift className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Système de Points</h3>
              <p className="text-muted-foreground">Attribuez et gérez des points pour vos utilisateurs selon vos propres règles.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Award className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Règles Personnalisées</h3>
              <p className="text-muted-foreground">Créez des règles de bonification adaptées à votre modèle d'affaires.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Star className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Récompenses</h3>
              <p className="text-muted-foreground">Offrez des récompenses attractives pour fidéliser vos utilisateurs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}