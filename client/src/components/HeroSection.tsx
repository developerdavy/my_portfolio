import { ArrowRight, CheckCircle, Code, Sparkles } from "lucide-react";
import portraitImage from "@assets/Formal Portrait in Navy Suit.png";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-github-blue rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-github-green rounded-full floating-animation opacity-50" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-in-up">
            <div className="text-accent font-mono text-sm mb-4 flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Hi, my name is
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              David Kamau
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8">
              Software Developer & AI Agent Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Passionate software developer specializing in web development, software engineering, and cutting-edge AI agent development. 
              I build exceptional digital experiences that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-github-blue hover:bg-blue-600 transition-all duration-300 glow-effect"
              >
                Get In Touch
                <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 border border-github-blue text-base font-medium rounded-lg text-github-blue bg-card/50 hover:bg-muted backdrop-blur-sm transition-all duration-300"
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative floating-animation">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-github-blue shadow-2xl pulse-glow">
                <img 
                  src={portraitImage} 
                  alt="David Kamau - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-github-green rounded-full flex items-center justify-center shadow-lg pulse-glow">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
