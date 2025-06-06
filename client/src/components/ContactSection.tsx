import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-github-dark mb-4">Get In Touch</h2>
          <p className="text-lg text-github-text max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Contact */}
          <div className="bg-github-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-github-blue rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-github-dark mb-4">Email Me</h3>
            <p className="text-github-text mb-6">Drop me a line for project inquiries or collaboration opportunities</p>
            <a 
              href="mailto:kamaudavid1803@gmail.com" 
              className="inline-flex items-center text-github-blue hover:text-blue-700 font-medium transition-colors duration-200"
            >
              kamaudavid1803@gmail.com
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Phone Contact */}
          <div className="bg-github-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-github-green rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-github-dark mb-4">Call Me</h3>
            <p className="text-github-text mb-6">Let's discuss your project requirements and technical needs</p>
            <a 
              href="tel:+254740133390" 
              className="inline-flex items-center text-github-blue hover:text-blue-700 font-medium transition-colors duration-200"
            >
              +254 740 133 390
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-6 text-github-text">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Kenya</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Available for remote work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
