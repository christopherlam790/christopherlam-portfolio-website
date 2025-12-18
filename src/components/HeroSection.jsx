import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="containter max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, </span>
            <span className="opacity-0 animate-fade-in-delay-1"> I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Christopher Lam
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a CS graduate passionate about turning data into insights. I
            build data analysis and visualization projects that make complex
            information clear and actionable.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="custom-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translat-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm ext-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
