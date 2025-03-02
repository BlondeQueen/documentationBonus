import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Gift, Settings, Star, TrendingUp, Users, Shield, Zap, BarChart } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Gift className="h-10 w-10 text-amber-500" />,
      title: "Système de Points",
      description: "Attribuez, suivez et gérez des points pour vos utilisateurs selon vos propres règles et critères."
    },
    {
      icon: <Award className="h-10 w-10 text-amber-500" />,
      title: "Récompenses Personnalisées",
      description: "Créez des récompenses attractives que vos utilisateurs peuvent obtenir en échangeant leurs points."
    },
    {
      icon: <Settings className="h-10 w-10 text-amber-500" />,
      title: "Règles de Bonification",
      description: "Définissez des règles complexes pour l'attribution de points basées sur les actions des utilisateurs."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
      title: "Analyses et Rapports",
      description: "Accédez à des analyses détaillées sur l'utilisation des points et l'engagement des utilisateurs."
    },
    {
      icon: <Users className="h-10 w-10 text-amber-500" />,
      title: "Gestion des Utilisateurs",
      description: "Gérez facilement les comptes utilisateurs et leurs historiques de points et récompenses."
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-500" />,
      title: "Sécurité Avancée",
      description: "Protégez votre système de points contre la fraude et les abus avec nos fonctionnalités de sécurité."
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Intégration Rapide",
      description: "Intégrez notre API à votre application en quelques minutes grâce à notre documentation détaillée."
    },
    {
      icon: <BarChart className="h-10 w-10 text-amber-500" />,
      title: "Tableaux de Bord",
      description: "Visualisez les performances de votre système de bonification avec des tableaux de bord intuitifs."
    },
    {
      icon: <Star className="h-10 w-10 text-amber-500" />,
      title: "Niveaux et Badges",
      description: "Créez des niveaux et des badges pour encourager la progression et la fidélité des utilisateurs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fonctionnalités <span className="text-amber-500">Complètes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            BonusAPI offre toutes les fonctionnalités dont vous avez besoin pour créer un système 
            de bonification complet et engageant pour vos utilisateurs.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="points">Points</TabsTrigger>
              <TabsTrigger value="rewards">Récompenses</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border bg-card hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="points" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.filter((_, index) => [0, 2, 4, 6, 8].includes(index)).map((feature, index) => (
                <Card key={index} className="border bg-card hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rewards" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.filter((_, index) => [1, 3, 5, 7].includes(index)).map((feature, index) => (
                <Card key={index} className="border bg-card hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}