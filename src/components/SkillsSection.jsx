import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Programing & Query Languages
  { name: "Python 3", category: "programming" },
  { name: "R Studio", category: "programming" },
  { name: "PostgreSQL", category: "programming" },
  { name: "Advanced Excel", category: "programming" },

  //Data Analysis
  { name: "Pandas", category: "analysis" },
  { name: "NumPy", category: "analysis" },
  { name: "Apache Spark (PySpark)", category: "analysis" },
  { name: "SciPy", category: "analysis" },
  { name: "SciKit Learn", category: "analysis" },

  //Data Visualization
  { name: "MatPlotLib", category: "visualization" },
  { name: "Tableau & PowerBI", category: "visualization" },
  { name: "Seaborn", category: "visualization" },
  { name: "Plotly", category: "visualization" },

  //Statistics
  { name: "Statistical Regression Analysis", category: "statistics" },
  { name: "Probability", category: "statistics" },
  { name: "Data Mining & Machine Learning", category: "statistics" },
  { name: "Hypothesis Testing", category: "statistics" },

  //Concepts & Tools
  { name: "Git/GiHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "CI/CD Pipelines", category: "tools" },
  { name: "Agile & SCRUM Methodologies", category: "tools" },
];

const categories = [
  "all",
  "programming",
  "analysis",
  "visualization",
  "statistics",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
