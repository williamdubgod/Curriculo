import React, { useState, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Download, Menu, X, Phone, Award, BookOpen, Code, Star, MapPin, Calendar, User, Rocket, Search } from 'lucide-react';
import eu from '../eu.jpg'

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    // Cria um link temporário para o arquivo PDF
    const link = document.createElement('a');
    link.href = '/curriculo-william.pdf'; // Caminho para o arquivo PDF na pasta public
    link.download = 'curriculo-william.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click(); // Simula o clique no link para iniciar o download
    document.body.removeChild(link); // Remove o link do DOM após o download
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/90 backdrop-blur-sm shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-400">William Vulcano</span>
            </div>
            
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Sobre</a>
              <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Formação</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Experiência</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Habilidades</a>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Portfólio</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contato</a>
            </div>
          </div>
        </div>

        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Sobre</a>
            <a href="#education" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Formação</a>
            <a href="#experience" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Experiência</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Habilidades</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Portfólio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">Contato</a>
          </div>
        </div>
      </nav>

      <div ref={contentRef}>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <div className="relative group">
                  <img
                    src={eu}
                    alt="William Vulcano"
                    className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0 shadow-lg ring-4 ring-blue-400 transform transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    <span>24 anos, Brasileiro, Solteiro</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                    <span>São Caetano do Sul - SP</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-400" />
                    <a href="mailto:william_vulcano@hotmail.com" className="hover:text-blue-400">
                      william_vulcano@hotmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    <a href="tel:+5511998631820" className="hover:text-blue-400">
                      (11) 99863-1820
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-center md:text-left"
              >
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  William Mendes Vulcano
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  Desenvolvedor Front-end apaixonado por criar experiências digitais únicas
                </p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mb-6 space-y-2"
                >
                  <p className="text-md text-gray-400">
                    🌎 Português (Nativo) | Inglês (B2) | Espanhol (Intermediário)
                  </p>
                  <p className="text-gray-300">
                    <Rocket className="inline-block mr-2 text-blue-400" size={20} />
                    Em busca de novas oportunidades!
                  </p>
                </motion.div>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <motion.button
                    onClick={handleDownloadCV}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all duration-300"
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </motion.button>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-600 transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span>Contato</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Sobre Mim
              </h2>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Sou um desenvolvedor front-end em início de carreira, com anseio por criar experiências digitais excepcionais. 
                Minha jornada inclui 6 meses de experiência prática na MadeInWeb e Mobile, onde desenvolvi habilidades sólidas em React.js e Vue.js.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Atualmente, estou em busca de novas oportunidades para aplicar e expandir meus conhecimentos em desenvolvimento web e mobile. 
                Minha experiência com metodologias ágeis e desenvolvimento web me proporcionou uma visão holística do desenvolvimento de software.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
              >
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-300 font-semibold mb-2">Soft Skills</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Comunicação efetiva</li>
                    <li>• Trabalho em equipe</li>
                    <li>• Resolução de problemas</li>
                    <li>• Pensamento analítico</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-300 font-semibold mb-2">Pontos Fortes</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aprendizado rápido</li>
                    <li>• Adaptabilidade</li>
                    <li>• Proatividade</li>
                    <li>• Organização</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-300 font-semibold mb-2">Interesses</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Novas tecnologias</li>
                    <li>• Cibersegurança</li>
                    <li>• Flutter</li>
                    <li>• Open Source</li>
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Formação Acadêmica
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="text-gray-400">FIAP</p>
                    <p className="text-gray-400">2022 - 2024</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Curso focado em desenvolvimento de software, com ênfase em tecnologias web e mobile.
                  Projetos práticos incluindo desenvolvimento full-stack e metodologias ágeis.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">Ensino Médio</h3>
                    <p className="text-gray-400">Colégio Eduardo Gomes</p>
                    <p className="text-gray-400">2016 - 2018</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Formação básica completa com excelente desempenho acadêmico.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Habilidades Técnicas
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                  <Code className="mr-2" size={24} />
                  Front-end
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">React.js</span>
                      <span className="text-blue-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">JavaScript/TypeScript</span>
                      <span className="text-blue-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">HTML/CSS</span>
                      <span className="text-blue-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                  <Rocket className="mr-2" size={24} />
                  Mobile
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Swift</span>
                      <span className="text-blue-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">iOS Development</span>
                      <span className="text-blue-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Kotlin</span>
                      <span className="text-blue-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                  <Star className="mr-2" size={24} />
                  Ferramentas & Metodologias
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Git</span>
                      <span className="text-blue-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Metodologias Ágeis</span>
                      <span className="text-blue-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">VS Code</span>
                      <span className="text-blue-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Professional Goals Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Objetivos Profissionais
              </h2>
            </AnimatedSection>

            <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                    <Rocket className="mr-2" size={24} />
                    Curto Prazo
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Atuar como desenvolvedor Front-end em projetos desafiadores
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Aprofundar conhecimentos em React.js e TypeScript
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Contribuir para projetos open source
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                    <Star className="mr-2" size={24} />
                    Longo Prazo
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Especialização em arquitetura de software
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Desenvolvimento de soluções mobile inovadoras
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Liderança técnica em projetos de grande escala
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Experiência Profissional
              </h2>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Code className="text-blue-400 mr-4" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">MadeInWeb e Mobile</h3>
                      <p className="text-gray-400">Estagiário Front-end | Aug 2022 - Jan 2023</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Principais Responsabilidades</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Desenvolvimento de interfaces responsivas com React.js e Vue.js</li>
                        <li>Implementação de features e correção de bugs</li>
                        <li>Participação em code reviews e reuniões de planejamento</li>
                        <li>Integração com APIs RESTful</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Conquistas</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Reduziu o tempo de carregamento das páginas em 40% através de otimizações</li>
                        <li>Implementou sistema de componentes reutilizáveis, aumentando produtividade em 25%</li>
                        <li>Desenvolveu 3 projetos principais com 100% de satisfação do cliente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Search className="text-blue-400 mr-4" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">Encant Estética</h3>
                      <p className="text-gray-400">Social Media | 2023 - Presente</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Principais Responsabilidades</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Criação de artes e conteúdo visual utilizando Canva</li>
                        <li>Gerenciamento e publicação de conteúdo nas redes sociais</li>
                        <li>Gestão de tráfego pago e impulsionamento de publicações</li>
                        <li>Desenvolvimento de estratégias de marketing digital</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Habilidades Desenvolvidas</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Marketing Digital</li>
                        <li>Design Gráfico</li>
                        <li>Gestão de Mídias Sociais</li>
                        <li>Análise de Métricas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-blue-400 mr-4" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">Casapar Imóveis</h3>
                      <p className="text-gray-400">Financeiro e Marketing Digital | 2023 - 2024</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Principais Responsabilidades</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Gestão financeira: emissão e pagamento de boletos</li>
                        <li>Gerenciamento completo das mídias sociais (Instagram, Facebook, WhatsApp)</li>
                        <li>Captação e qualificação de leads para corretores</li>
                        <li>Agendamento e coordenação de visitas aos imóveis</li>
                        <li>Cadastro e atualização de imóveis no site da empresa</li>
                        <li>Atendimento ao cliente e suporte administrativo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Habilidades Desenvolvidas</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Gestão Financeira</li>
                        <li>Marketing Digital</li>
                        <li>Atendimento ao Cliente</li>
                        <li>Gestão de Conteúdo Web</li>
                        <li>Prospecção de Clientes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Certificações
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-blue-300">Desenvolvimento iOS</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">FIAP</p>
                  <p className="text-gray-400">Fevereiro 2024</p>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      Swift
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-blue-300">Responsive Web Development</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">FIAP</p>
                  <p className="text-gray-400">Fevereiro 2023</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React.js</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-blue-300">Customer Experience Management</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">FIAP</p>
                  <p className="text-gray-400">Fevereiro 2023</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">CRM</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Gestão de Produtos</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Portfólio
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                  alt="Associação Esportiva"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Aescult - Associação Esportiva</h3>
                  <p className="text-gray-300 mb-4">
                    Website desenvolvido para uma associação esportiva, com foco em apresentar informações sobre atividades e eventos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/williamdubgod/Aescult" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Code size={20} className="mr-2" />
                      Código
                    </a>
                    <a 
                      href="https://williamdubgod.github.io/Aescult/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Star size={20} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80"
                  alt="BioTube"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">BioTube - Canudos Ecológicos</h3>
                  <p className="text-gray-300 mb-4">
                    E-commerce desenvolvido para uma empresa de canudos ecológicos, focando em sustentabilidade e experiência do usuário.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/williamdubgod/BioTube" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Code size={20} className="mr-2" />
                      Código
                    </a>
                    <a 
                      href="https://williamdubgod.github.io/BioTube/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Star size={20} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
                Contato
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin size={24} className="text-blue-400" />
                    <span>Alameda dos Jacarandás, 232, Lote J3</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin size={24} className="text-blue-400 opacity-0" />
                    <span>Cerâmica, São Caetano do Sul - SP</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin size={24} className="text-blue-400 opacity-0" />
                    <span>CEP: 09531-155</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone size={24} className="text-blue-400" />
                    <a href="tel:+5511998631820" className="hover:text-blue-400">
                      (11) 99863-1820
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail size={24} className="text-blue-400" />
                    <a href="mailto:william_vulcano@hotmail.com" className="hover:text-blue-400">
                      william_vulcano@hotmail.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="bg-gray-800 rounded-lg shadow-xl p-8">
                <h3 className="text-xl font-bold text-blue-400 mb-6">Redes Sociais</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/william-vulcano/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/williamdubgod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={24} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://wa.me/5511998631820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Phone size={24} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 text-gray-300 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 William Mendes Vulcano. Todos os direitos reservados.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;