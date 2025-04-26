import { Facebook, MessageSquare } from "lucide-react";
import ServiceCategories from "@/components/ServiceCategories";
import SearchSection from "@/components/SearchSection";
import AssemblyServices from "@/components/AssemblyServices";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-primary">
                L'Maalem
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
              <a href="#become-master" className="text-gray-600 hover:text-primary">
                Become a Master
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
                  href="#become-master"
                  className="text-gray-600 hover:text-primary"
                >
                  Become a Master
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
        {/* Hero Section with Search */}
        <section className="py-16">
          <SearchSection />
        </section>

        {/* Service Categories */}
        <section className="border-t border-b">
          <ServiceCategories />
        </section>

        {/* Assembly Services Section */}
        <section className="py-8 md:py-12 max-w-7xl mx-auto">
          <AssemblyServices />
        </section>

        {/* Trust Metrics */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">3.4 million+</div>
                <div className="text-sm text-muted-foreground">Furniture Assemblies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1.5 million+</div>
                <div className="text-sm text-muted-foreground">Moving tasks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1 million+</div>
                <div className="text-sm text-muted-foreground">Items mounted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">700,000+</div>
                <div className="text-sm text-muted-foreground">Home Repairs</div>
              </div>
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
              <p className="text-gray-400">hello@lmaalem.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <MessageSquare className="h-6 w-6" />
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
            <p>© 2024 L'Maalem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
