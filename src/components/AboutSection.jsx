import { Briefcase, Code, Monitor } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedora Full Stack em formação
            </h3>

            <p className="text-muted-foreground">
              Estudante do 3º período de Análise e Desenvolvimento de Sistemas,
              já desenvolvo pequenos projetos utilizando tecnologias como HTML,
              CSS e JavaScript e estou constantemente aprimorando minhas
              habilidades em C#, .NET, PostgreSQL, React, Next.js e Tailwind.
            </p>

            <p className="text-muted-foreground">
              Sou uma pessoa dedicada e curiosa, sempre buscando aprender novas
              tecnologias e boas práticas para entregar projetos de qualidade.
              Estou animada para crescer na área de desenvolvimento e contribuir
              com projetos que impactem positivamente as pessoas e o mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contato" className="cosmic-button">
                Entre em contato
              </a>

              <a
                href="/natalia_curriculo.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                    Experiência criando páginas otimizadas com HTML, CSS e
                    frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Tecnologias Back-End
                  </h4>
                  <p className="text-muted-foreground">
                    Aprendendo a construir APIs e lógica de servidor com C# e
                    .NET.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ferramentas Atuais</h4>
                  <p className="text-muted-foreground">
                    Atualmente estou me aprofundando em React, Next.js, Tailwind
                    e PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
