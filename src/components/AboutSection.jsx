import { Code, ChartLine, Newspaper } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate software developer with a curiosity for identifying,
              solving, and visualizing problems through code
            </h3>

            <p className="text-muted-foreground">
              With a background in Computer Science & Philosophy, I am dedicated
              to developing innovative, efficient, and ethical software
              solutions that exceed user expectations.
            </p>

            <p className="text-muted-foreground">
              I am a software developer driven by curiosity and a strong passion
              for problem-solving. I enjoy identifying meaningful challenges,
              designing efficient solutions, and bringing clarity through clean
              code and data visualization. My work focuses on transforming
              complex problems into intuitive, scalable, and impactful software
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="custom-button">
                Get In Touch
              </a>

              <a
                href="/Christopher Lam Resume - SWE & Data Eng.pdf"
                download="Christopher Lam Resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartLine className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Identifying patterns, trends, and insights from data to
                    drive informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Developing Innovative Solutions
                  </h4>
                  <p className="text-muted-foreground">
                    Creating efficient and scalable solutions to identify and
                    solve complex problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Data Visualization & Technical Writing
                  </h4>
                  <p className="text-muted-foreground">
                    Communicating complex data and technical information in a
                    clear and accessible manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
