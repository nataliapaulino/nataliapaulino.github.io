import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bikcraft",
    description:
      "Site responsivo desenvolvido para uma loja de bicicletas, com layout moderno e vitrine de produtos.",
    image: "/projects/bikcraft.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://bikcraft-xi-seven.vercel.app/",
    githubUrl: "https://github.com/nataliapaulino/bikcraft",
  },
  {
    id: 2,
    title: "Polo Ártico",
    description: "Site institucional responsivo desenvolvido para uma empresa de refrigeração e ar-condicionado.",
    image: "/projects/poloartico.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://site-ltd-polaartico.vercel.app/",
    githubUrl: "https://github.com/nataliapaulino/Site-LTD-Poloartico",
  },
];

export const ProjectsSections = () => {
  return (
    <section id="projetos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes. Cada um deles foi
          cuidadosamente desenvolvido com atenção aos detalhes, desempenho e
          experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rouded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justfy-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/nataliapaulino"
            target="_blank"
          >
            Confira meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
