import { Users, Award, Settings, MessageCircle, Layout, Bot } from "lucide-react";

export default function SkillsSection() {
  const programmingLanguages = [
    {
      name: "JavaScript",
      description: "ES6+, Modern JS",
      color: "bg-yellow-500",
      initials: "JS"
    },
    {
      name: "Python",
      description: "Backend, AI/ML",
      color: "bg-blue-600",
      initials: "PY"
    },
    {
      name: "PHP",
      description: "Server-side dev",
      color: "bg-purple-600",
      initials: "PHP"
    },
    {
      name: "Java",
      description: "Enterprise, Android",
      color: "bg-red-600",
      initials: "☕"
    }
  ];

  const frameworks = [
    {
      name: "Laravel",
      description: "PHP framework for web artisans with elegant syntax",
      color: "bg-red-500",
      initials: "L",
      tags: ["MVC", "Eloquent"]
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for scalable network applications",
      color: "bg-green-600",
      initials: "N",
      tags: ["Express", "REST"]
    },
    {
      name: "Android Dev",
      description: "Native Android application development",
      color: "bg-green-500",
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
      name: "Team Work",
      description: "Collaborative development and cross-functional coordination",
      icon: Users,
      color: "bg-github-green"
    },
    {
      name: "Leadership Skills",
      description: "Project management and technical team guidance",
      icon: Award,
      color: "bg-github-blue"
    },
    {
      name: "Problem Solving",
      description: "Analytical thinking and innovative solution development",
      icon: Settings,
      color: "bg-yellow-500"
    },
    {
      name: "Communication",
      description: "Clear technical documentation and stakeholder engagement",
      icon: MessageCircle,
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-github-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-github-dark mb-4">Skills & Expertise</h2>
          <p className="text-lg text-github-text max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and professional skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-github-dark mb-8 text-center">Technical Skills</h3>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h4 className="text-lg font-medium text-github-dark mb-6">Programming Languages</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="skill-card bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
                  <div className={`w-12 h-12 mx-auto mb-4 ${language.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-mono font-bold text-lg">{language.initials}</span>
                  </div>
                  <h5 className="font-semibold text-github-dark mb-2">{language.name}</h5>
                  <div className="text-sm text-github-text">{language.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="mb-12">
            <h4 className="text-lg font-medium text-github-dark mb-6">Frameworks & Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => (
                <div key={index} className="skill-card bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${framework.color} rounded-lg flex items-center justify-center mr-3`}>
                      <span className="text-white font-bold text-sm">{framework.initials}</span>
                    </div>
                    <h5 className="font-semibold text-github-dark">{framework.name}</h5>
                  </div>
                  <p className="text-sm text-github-text">{framework.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {framework.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-github-light text-xs font-medium text-github-text rounded">
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
            <h4 className="text-lg font-medium text-github-dark mb-6">Specializations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((specialization, index) => (
                <div key={index} className="skill-card bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${specialization.color} rounded-lg flex items-center justify-center mr-3`}>
                      <specialization.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-github-dark">{specialization.name}</h5>
                      <p className="text-sm text-github-text">{specialization.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-github-dark mb-8 text-center">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="skill-card bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
                <div className={`w-12 h-12 mx-auto mb-4 ${skill.color} rounded-full flex items-center justify-center`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-github-dark mb-2">{skill.name}</h5>
                <p className="text-sm text-github-text">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
