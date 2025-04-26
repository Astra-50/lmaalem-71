
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Circle,
  CircleCheckBig,
  Facebook,
  Globe,
  HandshakeIcon,
  Shield,
  Star,
  WhatsApp,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-primary">
                HelpHub
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary">
                How It Works
              </a>
              <a href="#become-tasker" className="text-gray-600 hover:text-primary">
                Become a Tasker
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-primary"
                >
                  How It Works
                </a>
                <a
                  href="#become-tasker"
                  className="text-gray-600 hover:text-primary"
                >
                  Become a Tasker
                </a>
                <a href="#contact" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Need a Helping Hand? Find Trusted Taskers in Minutes.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Cleaning, repairs, furniture assembly & more—fast, reliable, and
                local.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg">
                  Post a Task
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Become a Tasker
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Circle,
                  title: "Post a Task",
                  description: "Describe what you need done",
                },
                {
                  icon: HandshakeIcon,
                  title: "Get Matched",
                  description: "Review offers from trusted taskers",
                },
                {
                  icon: CircleCheckBig,
                  title: "Get It Done",
                  description: "Schedule & complete your task",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Verified Taskers",
                  description: "All taskers are vetted and background-checked",
                },
                {
                  icon: Circle,
                  title: "Secure Payments",
                  description: "Cash-on-delivery or mobile wallet options",
                },
                {
                  icon: Globe,
                  title: "Multilingual Support",
                  description: "Available in Arabic, French, and English",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote:
                    "HelpHub made finding a reliable handyman so easy. The service was excellent!",
                  name: "Sarah",
                  city: "Casablanca",
                },
                {
                  quote:
                    "As a tasker, I love how simple it is to find new clients and grow my business.",
                  name: "Ahmed",
                  city: "Cairo",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold">
                        {testimonial.name},{" "}
                        <span className="text-gray-500">{testimonial.city}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">4.8★ average rating</span>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden md:block" />
              <div className="text-2xl font-bold">100+ tasks completed in beta</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">hello@helphub.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <WhatsApp className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Language</h3>
              <div className="flex space-x-4 text-gray-400">
                <button className="hover:text-white">AR</button>
                <span>|</span>
                <button className="hover:text-white">FR</button>
                <span>|</span>
                <button className="text-white">EN</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 HelpHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
