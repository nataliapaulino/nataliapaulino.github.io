import { Github, Linkedin, Mail, MapPin, Phone} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Fique à vontade para entrar em contato. Estou sempre aberta a novas
          oportunidades.
        </p>

        <div className="gap-12">
          <div className="space-y-8">

            <div className="space-y-6 justify-center grid">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start mb-1">Email</h4>
                  <a
                    href="mailto:npalbuquerque@outlook.com"
                    className="text-muted-foreground hover:text-primary transtion-colors"
                  >
                    npalbuquerque@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start mb-1">Celular</h4>
                  <a
                    href="https://wa.me/5521971883735"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transtion-colors"
                  >
                    (21) 97188-3735
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start mb-1">Localização</h4>
                  <a className="text-muted-foreground hover:text-primary transtion-colors">
                    Rio de Janeiro - RJ
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Conecte-se Comigo</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/nataliapasial/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/nataliapaulino" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
