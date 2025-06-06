import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-github-dark mb-4">About Me</h2>
          <p className="text-lg text-github-text max-w-2xl mx-auto">
            Building innovative solutions with modern technology stack and AI integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-github-dark mb-6">Professional Journey</h3>
            <div className="space-y-4 text-github-text">
              <p className="leading-relaxed">
                As a dedicated software developer with extensive experience in web development, software engineering, 
                and AI agent development, I specialize in creating robust, scalable solutions that drive business growth 
                and enhance user experiences.
              </p>
              <p className="leading-relaxed">
                My expertise spans across multiple programming languages including Python, JavaScript, PHP, and Java, 
                with deep knowledge in frameworks like Laravel and Node.js. I excel in API development and integration, 
                ensuring seamless connectivity between systems and services.
              </p>
              <p className="leading-relaxed">
                Currently focusing on cutting-edge AI agent development, I combine traditional software engineering 
                principles with modern AI technologies to build intelligent systems that solve complex business challenges.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-github-light rounded-lg p-6">
              <h4 className="text-lg font-semibold text-github-dark mb-4">Core Expertise</h4>
              <ul className="space-y-2 text-github-text">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  AI Agent Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  API Development & Integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  Mobile App Development
                </li>
              </ul>
            </div>
            
            <div className="bg-github-light rounded-lg p-6">
              <h4 className="text-lg font-semibold text-github-dark mb-4">Professional Values</h4>
              <div className="text-github-text space-y-2">
                <p className="text-sm">🎯 Problem-solving focused approach</p>
                <p className="text-sm">🤝 Collaborative team leadership</p>
                <p className="text-sm">💡 Innovation-driven mindset</p>
                <p className="text-sm">📈 Continuous learning commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
