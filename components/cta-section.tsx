import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à transformer votre application ?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Commencez dès aujourd'hui à intégrer notre système de bonification et 
          offrez à vos utilisateurs une expérience plus engageante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="border-white text-amber-600 hover:bg-white/10">
            <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank">
              Voir la Documentation
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-amber-600 hover:bg-white/10">
            <Link href="https://github.com/Momo-azangue/bonusapi" target="_blank">
              Explorer sur GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}