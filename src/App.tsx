import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWheatAwn, 
  faHeart, 
  faMagnifyingGlass, 
  faStore, 
  faCreditCard, 
  faMessage, 
  faHeadset,
  faPercent,
  faLaptop,
  faTractor,
  faBoxes,
  faMapMarkerAlt,
  faVideo,
  faClipboardList,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import BetaSignupForm from "./BetaSignupForm";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleBetaClick = () => {
    setShowSignupForm(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {showSignupForm && <BetaSignupForm onClose={() => setShowSignupForm(false)} />}
      
      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-sm py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faWheatAwn} className="text-amber-700 text-2xl" />
              <span className="font-['Calistoga'] text-2xl text-amber-900">FarmKit</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-amber-900 hover:text-amber-700">Features</a>
              <a href="#functions" className="text-amber-900 hover:text-amber-700">Functions</a>
              <a href="#roadmap" className="text-amber-900 hover:text-amber-700">Roadmap</a>
              <a href="#about" className="text-amber-900 hover:text-amber-700">About</a>
            </nav>
            <button 
              onClick={handleBetaClick}
              className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              Join the Beta
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#faf7f2]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(#d6a656 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-['Calistoga'] text-5xl md:text-7xl text-amber-900 mb-4">
             Farm to Front Porch—Simple, Local, Sustainable
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8">
              Connecting and growing your farm community has never been easier.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleBetaClick}
                className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors text-lg"
              >
                Join the Beta
              </button>
              <a 
                href="#about"
                className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full hover:bg-amber-700 hover:text-white transition-colors text-lg"
              >
                About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: faPercent, title: "No Listing Fees", description: "Keep more of what you earn" },
              { icon: faLaptop, title: "Modern Interface", description: "Easy to use, beautiful design" },
              { icon: faTractor, title: "Built for Farms", description: "Tailored to your needs" },
              { icon: faBoxes, title: "Sell Almost Anything", description: "From produce to crafts" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#faf7f2] p-6 rounded-xl text-center"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-amber-700 mb-4" />
                <h3 className="font-['Calistoga'] text-2xl text-amber-900 mb-4">{feature.title}</h3>
                <p className="text-amber-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Functions */}
      <section id="functions" className="py-20 bg-[#faf7f2]">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">Platform Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faMapMarkerAlt,
                title: "Discovery",
                description: "Find local farms easily through our local listing grid, or map functions"
              },
              {
                icon: faStore,
                title: "Farm Pages",
                description: "Design your own custom farm page with your products, information, your own blog, and sharable video"
              },
              {
                icon: faCreditCard,
                title: "Online and Offline Payments",
                description: "Through Stripe integration, sell your products digitally, or offline with no fees using cash"
              },
              {
                icon: faClipboardList,
                title: "Easy Order Management",
                description: "From the moment a customer places an order request, you are in control, communicate with the customer throughout"
              },
              {
                icon: faHeadset,
                title: "Local Support",
                description: "Based in Hatley, Wisconsin, the FarmKit team is here to help via email, phone, and chat support"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-amber-700 mb-4" />
                <h3 className="font-['Calistoga'] text-2xl text-amber-900 mb-4">{feature.title}</h3>
                <p className="text-amber-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">Our Roadmap</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { date: "April/May 2025", title: "Beta Launch" },
              { date: "August 2025", title: "Digital Payments Beta" },
              { date: "November 2025", title: "Limited Public Launch" },
              { date: "Early 2026", title: "Official Launch" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-32 text-right font-semibold text-amber-700">{milestone.date}</div>
                <div className="w-4 h-4 rounded-full bg-amber-700 flex-shrink-0"></div>
                <div className="flex-1 bg-[#faf7f2] p-4 rounded-lg">
                  <h3 className="font-['Calistoga'] text-xl text-amber-900">{milestone.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-[#faf7f2]">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-['Calistoga'] text-2xl text-amber-900 mb-4">Community Connection</h3>
              <p className="text-amber-800 leading-relaxed">
                To ensure local farms have an easy way to sell and connect with those in their community,
                building a strong local connection with their community. Strengthening local food sales
                and independence from large factory farms.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-['Calistoga'] text-2xl text-amber-900 mb-4">Farm Advocacy</h3>
              <p className="text-amber-800 leading-relaxed">
                We hope to expand into farm advocacy, standing up for farm rights, right to repair,
                and other small business and farm movements. Our commitment is to be a voice for
                local agriculture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">About the Company</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#faf7f2] p-8 rounded-xl"
            >
              <h3 className="font-['Calistoga'] text-2xl text-amber-900 mb-4">FarmKit & Reimann Labs</h3>
              <p className="text-amber-800 leading-relaxed mb-6">
                FarmKit is a Reimann Labs, LLC venture. Based in the scenic outskirts of Wausau, Wisconsin,
                Reimann Labs is a small software development company that launched in 2023. We're passionate
                about using our skills to create impactful projects for our local community, and FarmKit
                is an exciting next step in that journey.
              </p>
              <p className="text-amber-800 leading-relaxed mb-6">
                Our mission is all about connecting people. With deep roots in the agricultural world,
                we're committed to leveraging technology to support and invest in local family farms.
                Through FarmKit, we aim to enhance local communities, streamline local sales, and
                empower farmers to thrive, ensuring a bright future for agriculture in our community
                and beyond.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">2023</div>
                  <div className="text-amber-800">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">100%</div>
                  <div className="text-amber-800">Local Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">24/7</div>
                  <div className="text-amber-800">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">0%</div>
                  <div className="text-amber-800">Commission</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="container mx-auto px-4">
          <h2 className="font-['Calistoga'] text-4xl text-amber-900 text-center mb-16">Platform Technologies</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "TailwindCSS",
              "Next.JS",
              "Supabase",
              "Convex",
              "FontAwesome",
              "Linode",
              "Vercel"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-md text-amber-900"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faWheatAwn} className="text-2xl" />
              <span className="font-['Calistoga'] text-2xl">FarmKit</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#features" className="hover:text-amber-200 transition-colors">Features</a>
              <a href="#functions" className="hover:text-amber-200 transition-colors">Functions</a>
              <a href="#roadmap" className="hover:text-amber-200 transition-colors">Roadmap</a>
              <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
            </nav>
            <div className="text-center md:text-right">
              <div>A Reimann Labs, LLC Venture</div>
              <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
                Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> in Hatley, Wisconsin
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-amber-800/30 text-amber-200">
            © {new Date().getFullYear()} FarmKit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
