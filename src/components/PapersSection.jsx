import { ArrowRight, Download } from "lucide-react";

const papers = [
  {
    id: 1,
    title:
      "(WIP) Evaluating the Intraday Performance of Iron Condor Options: A Data-Driven Analysis",
    description:
      "This paper evaluates the intraday performance of Iron Condor options using a data-driven approach, refferencing the project work of 'Data-Driven Analysis of Iron Condor Options in Intraday Trading'.",
    image: "papers/SPY target Analysis/SPY target Analysis img.png",
    tags: [
      "Exploratory Data Analysis",
      "Decision Support Analytics",
      "Statistical Analysis",
      "Threshold-Based Classification",
    ],
    downloadUrl:
      "papers/SPY target Analysis/Intraday SPY Next Move Data Analysis & Potential Applications.pdf",
  },
];

export const PapersSection = () => {
  return (
    <section id="papers" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Research
          <span className="text-primary"> Papers</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing research papers based on innovative projects and
          data-driven analyses across various domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden ">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2"> {paper.title} </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {paper.description}{" "}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3"></div>
                </div>

                <a
                  href={paper.downloadUrl}
                  className="text-foreground/80 hover:text-primary tansition-colors duration-300"
                  target="_blank">
                  <Download size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="custom-button w-fit flex items-center mx-auto g-2"
            target="_blank"
            href="https://github.com/christopherlam790">
            Want to see more papers? Check My Github!
            <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};
