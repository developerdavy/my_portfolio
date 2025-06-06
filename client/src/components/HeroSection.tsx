import { ArrowRight, CheckCircle } from "lucide-react";
import portraitImage from "@assets/Formal Portrait in Navy Suit.png";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-github-light to-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-github-blue font-mono text-sm mb-4">Hi, my name is</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-github-dark mb-6">
              David Kamau
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-github-text mb-8">
              Software Developer & AI Agent Developer
            </h2>
            <p className="text-lg text-github-text mb-8 leading-relaxed max-w-lg">
              Passionate software developer specializing in web development, software engineering, and cutting-edge AI agent development. 
              I build exceptional digital experiences that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-github-blue hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
                <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 border border-github-blue text-base font-medium rounded-md text-github-blue bg-white hover:bg-github-light transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={portraitImage} 
                  alt="David Kamau - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-github-green rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
