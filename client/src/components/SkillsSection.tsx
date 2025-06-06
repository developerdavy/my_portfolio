import { Users, Award, Settings, MessageCircle, Layout, Bot, Zap, Database } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();
  const programmingLanguages = [
    {
      name: "JavaScript",
      description: "ES6+, Modern JS",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      initials: "JS"
    },
    {
      name: "Python",
      description: "Backend, AI/ML",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      initials: "PY"
    },
    {
      name: "PHP",
      description: "Server-side dev",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      initials: "PHP"
    },
    {
      name: "Java",
      description: "Enterprise, Android",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      initials: "☕"
    }
  ];

  const frameworks = [
    {
      name: "Laravel",
      description: "PHP framework for web artisans with elegant syntax",
      color: "bg-gradient-to-br from-red-400 to-red-600",
      initials: "L",
      tags: ["MVC", "Eloquent"]
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for scalable network applications",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      initials: "N",
      tags: ["Express", "REST"]
    },
    {
      name: "Android Dev",
      description: "Native Android application development",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      initials: "🤖",
      tags: ["Kotlin", "Java"]
    }
  ];

  const specializations = [
    {
      name: "API Development",
      description: "RESTful APIs, GraphQL, Microservices",
      icon: Layout,
      color: "bg-github-blue"
    },
    {
      name: "AI Agent Development",
      description: "Intelligent automation, ML integration",
      icon: Bot,
      color: "bg-purple-600"
    }
  ];

  const professionalSkills = [
    {
      name: t('skills.teamwork'),
      description: t('skills.teamwork.desc'),
      icon: Users,
      color: "bg-github-green"
    },
    {
      name: t('skills.leadership'),
      description: t('skills.leadership.desc'),
      icon: Award,
      color: "bg-github-blue"
    },
    {
      name: t('skills.problem'),
      description: t('skills.problem.desc'),
      icon: Settings,
      color: "bg-yellow-500"
    },
    {
      name: t('skills.communication'),
      description: t('skills.communication.desc'),
      icon: MessageCircle,
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-github-blue/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 mr-3 text-github-blue" />
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center">
            <Database className="w-6 h-6 mr-3 text-accent" />
            {t('skills.technical')}
          </h3>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h4 className="text-lg font-medium text-foreground mb-6">{t('skills.languages')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="skill-card bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center border border-border glow-effect">
                  <div className={`w-12 h-12 mx-auto mb-4 ${language.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-mono font-bold text-lg">{language.initials}</span>
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">{language.name}</h5>
                  <div className="text-sm text-muted-foreground">{language.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="mb-12">
            <h4 className="text-lg font-medium text-foreground mb-6">{t('skills.frameworks')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => (
                <div key={index} className="skill-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${framework.color} rounded-lg flex items-center justify-center mr-3 shadow-lg`}>
                      <span className="text-white font-bold text-sm">{framework.initials}</span>
                    </div>
                    <h5 className="font-semibold text-foreground">{framework.name}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {framework.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-muted/50 text-xs font-medium text-muted-foreground rounded backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">{t('skills.specializations')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((specialization, index) => (
                <div key={index} className="skill-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${specialization.color} rounded-lg flex items-center justify-center mr-3 shadow-lg`}>
                      <specialization.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{specialization.name}</h5>
                      <p className="text-sm text-muted-foreground">{specialization.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center">
            <Award className="w-6 h-6 mr-3 text-github-green" />
            {t('skills.professional')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="skill-card bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center border border-border">
                <div className={`w-12 h-12 mx-auto mb-4 ${skill.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">{skill.name}</h5>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
