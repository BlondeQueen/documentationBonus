import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function TeamSection() {
  const team = [
    {
      name: "MOMO William",
      role: "Ingénieur en génie informatique",
      bio: "Développeur backend, amoureux de la conception logiciel, je prends un plaisir à réaliser les idées de mes clients",
      avatar: "https://i.postimg.cc/jq4ffjJk/williams.jpg",
      social: {
        github: "https://github.com/Momo-azangue",
        linkedin: "https://www.linkedin.com/in/william-momo-azangue",
        twitter: "#"
      }
    },
    {
      name: "Willy WATCHO",
      role: "Chef de groupe",
      bio: "Élève ingénieur en génie informatique",
      avatar: "",
      social: {
        github: "https://github.com/nkwilly",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Blonde DANGA",
      role: "chef d'equipe frontend",
      bio: "Élève ingénieure passionnée par tout ce qui est beau, ce qui m'a naturellement orientée vers le développement frontend.",
      avatar: "https://i.postimg.cc/NfGHkw6G/blonde.jpg",
      social: {
        github: "https://github.com/BlondeQueen",
        linkedin: "https://www.linkedin.com/in/blonde-danga-a39324316/?originalSubdomain=cm",
        twitter: "https://x.com/BlondeDanga"
      }
    },
    {
      name: "Franck NOUNDJEU",
      role: "",
      bio: "Élève ingénieur en génie informatique",
      avatar: "https://i.postimg.cc/HxkGnT9n/Whats-App-Image-2025-03-02-at-8-40-55-PM.jpg",
      social: {
        github: "https://github.com/frankettheofranckettheo",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Fresnel KENGNE",
      role: "backend",
      bio: "Élève ingénieur en informatique, passionnée par le développement d'API",
      avatar: "https://i.postimg.cc/cH9p8PFm/Whats-App-Image-2025-03-02-at-9-02-45-PM.jpg",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Kros TEMGOUA",
      role: "frontend",
      bio: "Élève ingénieur en génie informatique",
      avatar: "",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre <span className="text-amber-500">Équipe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Rencontrez les personnes passionnées qui travaillent à rendre votre système 
            de bonification aussi performant que possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border bg-card hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={member.avatar} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-amber-500 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-start gap-4 pt-0">
                <Link href={member.social.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href={member.social.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href={member.social.twitter} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}