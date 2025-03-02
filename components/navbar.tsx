"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">BonusAPI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#developers" className="text-foreground/80 hover:text-primary transition-colors">
            Développeurs
          </Link>
          <Link href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Tarifs
          </Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Témoignages
          </Link>
          <Link href="#team" className="text-foreground/80 hover:text-primary transition-colors">
            Équipe
          </Link>
          <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
            <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank">
              Voir Documentation
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              À propos
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Fonctionnalités
            </Link>
            <Link href="#developers" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Développeurs
            </Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Tarifs
            </Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Témoignages
            </Link>
            <Link href="#team" className="text-foreground/80 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Équipe
            </Link>
            <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 w-full">
              <Link href="https://bonus-api-presentation1.vercel.app/" target="_blank" onClick={toggleMenu}>
                Voir Documentation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}