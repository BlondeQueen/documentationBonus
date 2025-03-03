import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function TeamSection() {
  const team = [
    {
      name: "Thomas DJOTIO",
      role: "Prof, Dr-Ing, PDG",
      bio: "Enseignant chercheur doté de puissantes qualités de pédagogue et de manager",
      avatar: "data:image/jpeg;base64,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"
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/thomas-djotio/?originalSubdomain=cm",
        twitter: "#"
      }
    },
    {
      name: "Jean Yves Etougue ",
      role: "Ingénieur",
      bio: "TEO, Développeur de logiciels Fullstack Java",
      avatar: "https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t1.6435-9/134776295_3139203722845793_8585503910669612479_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFof0-BQqM4BI6I2XPraQHIcZslRfVjjK1xmyVF9WOMrdlzYfbilcemSx8RseiuXLqsHOAWIfbDxBpyU7oRZwxs&_nc_ohc=JI2ykSyzca0Q7kNvgEOXYrW&_nc_oc=AdjMQpfnDkQMvcm_L8L9YaY0dqpx5QlEIaibHJnnNUy0agHKUA30vEZYL5K7syvBDRM&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi2-1.fna&_nc_gid=AturKRooZ_YvSI2sRBXQtN6&oh=00_AYDEd2dTWi1C9bOy6FxaPzU6MOH3MkKAG9GVmUGKsXyNFQ&oe=67ECEC79",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
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
      role: "Chef de groupe & Chef équipe backend",
      bio: "Développeur fullstack, passionné par les nouvelles technologies, avec une expérience solide dans la conception et le développement d'applicationd performantes et évolutive",
      avatar: "https://i.postimg.cc/wTpCP7xM/Whats-App-Image-2025-03-03-at-8-43-14-AM.jpg",
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