import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, FileJson, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

export function DevelopersSection() {
  return (
    <section id="developers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pour les <span className="text-amber-500">Développeurs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre API est conçue par des développeurs, pour des développeurs. 
            Nous avons rendu l'intégration aussi simple et flexible que possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Intégration Facile</h3>
            <p className="text-lg text-muted-foreground mb-6">
              BonusAPI s'intègre facilement à votre application existante grâce à notre API RESTful 
              bien documentée. Nous fournissons des bibliothèques clientes pour les langages de 
              programmation les plus populaires.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Code className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Documentation Complète</h4>
                  <p className="text-muted-foreground">
                    Notre documentation détaillée couvre tous les aspects de l'API avec des exemples de code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileJson className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Réponses JSON Structurées</h4>
                  <p className="text-muted-foreground">
                    Toutes les réponses de l'API sont en JSON bien structuré et facile à traiter.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Terminal className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Environnement de Test</h4>
                  <p className="text-muted-foreground">
                    Testez votre intégration dans notre environnement sandbox avant de passer en production.
                  </p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
              <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank">
                Explorer la Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-6 shadow-lg">
            <Tabs defaultValue="rest">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              
              <TabsContent value="rest" className="mt-0">
                <pre className="bg-card p-4 rounded-md overflow-x-auto text-sm">
                  <code className="text-foreground">
{`// Exemple de requête pour attribuer des points
POST /api/v1/points/award
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "user_id": "user_123",
  "points": 50,
  "reason": "purchase_completed",
  "metadata": {
    "order_id": "order_789",
    "amount": 99.99
  }
}`}
                  </code>
                </pre>
              </TabsContent>
              
              <TabsContent value="javascript" className="mt-0">
                <pre className="bg-card p-4 rounded-md overflow-x-auto text-sm">
                  <code className="text-foreground">
{`// Exemple d'utilisation avec JavaScript
import { BonusAPI } from 'bonus-api-client';

const bonusApi = new BonusAPI('YOUR_API_KEY');

// Attribuer des points à un utilisateur
async function awardPoints() {
  try {
    const result = await bonusApi.points.award({
      user_id: 'user_123',
      points: 50,
      reason: 'purchase_completed',
      metadata: {
        order_id: 'order_789',
        amount: 99.99
      }
    });
    
    console.log('Points attribués:', result);
  } catch (error) {
    console.error('Erreur:', error);
  }
}`}
                  </code>
                </pre>
              </TabsContent>
              
              <TabsContent value="python" className="mt-0">
                <pre className="bg-card p-4 rounded-md overflow-x-auto text-sm">
                  <code className="text-foreground">
{`# Exemple d'utilisation avec Python
from bonus_api import BonusAPI

bonus_api = BonusAPI('YOUR_API_KEY')

# Attribuer des points à un utilisateur
def award_points():
    try:
        result = bonus_api.points.award(
            user_id='user_123',
            points=50,
            reason='purchase_completed',
            metadata={
                'order_id': 'order_789',
                'amount': 99.99
            }
        )
        
        print('Points attribués:', result)
    except Exception as e:
        print('Erreur:', str(e))`}
                  </code>
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Webhooks</h3>
            <p className="text-muted-foreground mb-4">
              Recevez des notifications en temps réel lorsque des événements importants se produisent dans votre système de bonification.
            </p>
            <Link href="https://bonus-api-presentation1.vercel.app/" className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center">
              En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">SDK Open Source</h3>
            <p className="text-muted-foreground mb-4">
              Utilisez nos SDK open source pour une intégration encore plus rapide dans votre application.
            </p>
            <Link href="https://github.com/Momo-azangue/bonusapi" className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center">
              Voir sur GitHub <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Support Développeur</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe de support technique est disponible pour vous aider avec votre intégration.
            </p>
            <Link href="#contact" className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center">
              Contacter le support <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}