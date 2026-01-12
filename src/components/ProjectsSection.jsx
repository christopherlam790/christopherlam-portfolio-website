import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Intraday SPY Next Move Data Analysis",
    description:
      "Analyzing the patterns intraday movements of the S&P 500 (SPY) across 2023 data; Ideal for identifying potential price ranges during open market hours & liklihood of price movements.",
    image:
      "projects/SPY target Analysis/CLEANED_FIG_4_block_size_0.0035_threshold_target_next_move.png",
    tags: ["Python", "NumPy", "Pandas", "Seaborn", "Parquet", "Docker"],
    githubUrl:
      "https://github.com/christopherlam790/Intraday_SPY_Next_Move_Analysis",
  },
  {
    id: 2,
    title: "S&P 500 Round Price Tendancy Analysis",
    description:
      "Analyzing the tendency for `price pins` near round & `nice` numerical values (e.g. a multiple of 5) across various S&P 500 instruments; Ideal for identifying potential psychological `price pins` during a trading week.",
    image: "projects/SPY Round Price Attraction Analysis/XSP Delta Heatmap.png",
    tags: ["Python", "PostGreSQL", "SciPy", "Pandas", "NumPy", "Matplotlib"],
    githubUrl:
      "https://github.com/christopherlam790/S_and_P_Round_Price_Tendancy",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing original projects that apply data-driven analysis to
          investigate, structure, and communicate insights across diverse
          problem domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}{" "}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary tansition-colors duration-300"
                      target="_blank">
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
            className="custom-button w-fit flex items-center mx-auto g-2"
            target="_blank"
            href="https://github.com/christopherlam790">
            Want to see more projects? Check My Github!{" "}
            <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};
