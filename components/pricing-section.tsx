import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      description: "Parfait pour tester et les petits projets",
      features: [
        "Jusqu'à 1 000 utilisateurs",
        "5 règles de bonification",
        "10 types de récompenses",
        "API rate limit: 100 req/min",
        "Support par email",
        "Documentation complète"
      ],
      cta: "Commencer gratuitement",
      popular: false
    },
    {
      name: "Pro",
      price: "49€",
      period: "/mois",
      description: "Pour les applications en croissance",
      features: [
        "Jusqu'à 10 000 utilisateurs",
        "Règles de bonification illimitées",
        "Types de récompenses illimités",
        "API rate limit: 1 000 req/min",
        "Support prioritaire",
        "Webhooks",
        "Tableau de bord d'analyse",
        "Environnement de test"
      ],
      cta: "Commencer l'essai gratuit",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Pour les grandes entreprises",
      features: [
        "Utilisateurs illimités",
        "Règles de bonification illimitées",
        "Types de récompenses illimités",
        "API rate limit personnalisé",
        "Support dédié 24/7",
        "SLA garanti",
        "Déploiement sur site possible",
        "Personnalisation complète",
        "Formation et onboarding"
      ],
      cta: "Contacter l'équipe commerciale",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plans <span className="text-amber-500">Tarifaires</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez le plan qui correspond le mieux à vos besoins. 
            Tous nos plans incluent l'accès à notre API et à notre documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`border ${plan.popular ? 'ring-2 ring-amber-500 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  asChild 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank">
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez des besoins spécifiques ? Contactez-nous pour une solution personnalisée.
          </p>
          <Button asChild variant="outline">
            <Link href="#contact">
              Demander un devis personnalisé
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}