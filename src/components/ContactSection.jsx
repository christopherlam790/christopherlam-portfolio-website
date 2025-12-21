import { Send, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {}, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In
          <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-24 max-w-2xl mx-auto">
          Exploring entry-level software and data opportunities with an interest
          in collaboration; Let’s connect!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-8">
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:christopherlam790@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <u> christopherlam790@gmail.com</u>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a className="text-muted-foreground">+1 (201)-783-2720</a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-center ">
            {" "}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin />
              </div>
              <div>
                <h4 className="font-medium"> Location </h4>
                <a className="text-muted-foreground"> NJ, USA</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Linkedin />
              </div>
              <div>
                <h4 className="font-medium"> LinkedIn </h4>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  href="https://www.linkedin.com/in/christopher-lam-8b256922a">
                  <u>https://www.linkedin.com/in/christopher-lam-8b256922a</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
