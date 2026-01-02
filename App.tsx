
import React from 'react';
import Hero from './sections/Hero';
import ProblemSection from './sections/ProblemSection';
import ContentSection from './sections/ContentSection';
import CardNav from './components/ui/CardNav';
import { Box, Layers, Zap, Code, Cpu, Globe, MessageCircle, Twitter, Mail } from 'lucide-react';

const App = () => {
  const items = [
    {
      label: "Mission",
      links: [
        { 
            label: "Our Vision", 
            description: "Redefining digital education through motion.", 
            span: "col-span-2",
            icon: <Globe size={18} />,
            color: "from-blue-500 to-purple-600"
        },
        { 
            label: "The Team", 
            description: "Creators & Engineers.", 
            span: "col-span-1",
            icon: <Cpu size={18} />,
            color: "from-emerald-500 to-green-600"
        },
        { 
            label: "Careers", 
            description: "Join the movement.", 
            span: "col-span-1",
            icon: <Zap size={18} />,
            color: "from-orange-500 to-red-600"
        }
      ]
    },
    {
      label: "Products", 
      links: [
        { 
            label: "Vibecode Pro", 
            description: "The ultimate creative development course.", 
            span: "col-span-2",
            icon: <Layers size={18} />,
            color: "from-pink-500 to-rose-500"
        },
        { 
            label: "Components", 
            description: "Copy-paste magic.", 
            span: "col-span-1",
            icon: <Box size={18} />,
            color: "from-cyan-500 to-blue-500"
        },
        { 
            label: "Templates", 
            description: "Start faster.", 
            span: "col-span-1",
            icon: <Code size={18} />,
            color: "from-violet-500 to-purple-500"
        }
      ]
    },
    {
      label: "Connect",
      links: [
        { 
            label: "Community", 
            description: "Join 10k+ developers.", 
            span: "col-span-2",
            icon: <MessageCircle size={18} />,
            color: "from-yellow-400 to-orange-500"
        },
        { 
            label: "Twitter", 
            description: "Updates.", 
            span: "col-span-1",
            icon: <Twitter size={18} />,
            color: "from-sky-400 to-blue-500"
        },
        { 
            label: "Email", 
            description: "Contact us.", 
            span: "col-span-1",
            icon: <Mail size={18} />,
            color: "from-gray-400 to-gray-600"
        }
      ]
    }
  ];

  return (
    <main className="bg-[#050505] text-primary selection:bg-white selection:text-black antialiased">
       <CardNav
        // Used a text logo fallback within component, passing undefined for logo image
        logoAlt="Learn2Vibecode"
        items={items}
        baseColor="#ffffff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <Hero />
      <ProblemSection />
      <ContentSection />
    </main>
  );
};

export default App;
