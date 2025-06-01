import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Olá, me</span>
            <span className="opacity-0 animate-fade-in"> chamo</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Natália
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Paulino
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Crio interfaces web com foco em usabilidade, acessibilidade e
            design. Utilizo HTML, CSS e JavaScript e estou aprimorando meus
            conhecimentos em React, .NET e PostgreSQL.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projetos" className="cosmic-button">
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};
