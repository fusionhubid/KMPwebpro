import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HardHat, Truck, FileText, Users, ShieldCheck, Briefcase, Phone, CheckCircle, Building2, TrendingUp, Monitor } from 'lucide-react';

// --- Animasi ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

// --- Data Services ---
const services = [
  {
    id: 1,
    title: "Construction",
    description: "Conventional construction, maintenance, and renovation of commercial buildings.",
    icon: <HardHat size={28} className="text-amber-500" />
  },
  {
    id: 2,
    title: "Trade & Logistics",
    description: "Wholesale trade intermediation and motorized transportation for general goods.",
    icon: <Truck size={28} className="text-amber-500" />
  },
  {
    id: 3,
    title: "Professional Advisory",
    description: "Legal documentation support, corporate governance, and management consulting.",
    icon: <FileText size={28} className="text-amber-500" />
  },
  {
    id: 4,
    title: "People Services",
    description: "Temporary workforce provision and broader human-resource management services.",
    icon: <Users size={28} className="text-amber-500" />
  },
  {
    id: 5,
    title: "Private Security",
    description: "Investigation, guarding, patrol, and security support for commercial activities and events.",
    icon: <ShieldCheck size={28} className="text-amber-500" />
  },
  {
    id: 6,
    title: "Integrated Business",
    description: "A multi-service business platform designed to connect operational capability with client needs.",
    icon: <Briefcase size={28} className="text-amber-500" />
  },
  {
    id: 7,
    title: "IT Solution By Fusion Hub",
    description: "Our partner who can solve any of your IT problems. Example: IT inventory, asset management, etc.",
    icon: <Monitor size={28} className="text-amber-500" />
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-amber-400">
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo_KMP-removebg-preview.png" alt="PT Ksatria Muda Perkasa Logo" className="h-16 w-auto object-contain" />
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-wider">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-900 transition-colors cursor-pointer">About Us</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-900 transition-colors cursor-pointer">Services</button>
            <button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-900 transition-colors cursor-pointer">Why KMP</button>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-900 text-amber-500 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-950 transition-colors shadow-lg shadow-blue-900/20 border border-blue-800 cursor-pointer">
            Contact Us
          </button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl -z-10 opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl -z-10 opacity-70" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="max-w-2xl relative z-10">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/10 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Semarang, Central Java
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Building solutions.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Connecting capability.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
              We are a multi-service business platform designed to connect operational capability with client needs. Delivering integrated construction, trade, logistics, and professional services.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-900 text-amber-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-950 transition-all shadow-xl shadow-blue-900/20 group cursor-pointer border border-blue-800"
              >
                <span>Work With Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all cursor-pointer"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={scaleUp} className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-2 border-blue-900/10 p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50" />
              <div className="relative z-10">
                <img src="/logo_KMP-removebg-preview.png" alt="PT Ksatria Muda Perkasa Logo" className="h-20 w-auto object-contain mb-6" />
                <h3 className="text-3xl font-black text-blue-900 mb-2 uppercase tracking-tight">KMP</h3>
                <p className="text-slate-600 font-bold tracking-widest uppercase text-xs">Trust • Capability • Delivery</p>
              </div>
              <div className="relative z-10 flex items-end gap-3 h-48 mt-8 opacity-90">
                {[40, 70, 45, 90, 65, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring" }}
                    className={`w-full rounded-t-lg ${i === 5 ? 'bg-amber-500' : 'bg-blue-900'}`}
                  />
                ))}
              </div>
            </div>

            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-12 z-20 bg-white p-5 rounded-2xl shadow-xl border-2 border-amber-500 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <Building2 size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-blue-900 uppercase">National Private</p>
                <p className="text-xs text-slate-500 font-bold">Company</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              { label: "Year Established", value: "2026", delay: 0.1 },
              { label: "Core Business Groups", value: "6", delay: 0.2 },
              { label: "Headquarters", value: "Semarang", delay: 0.3 },
              { label: "Legal Status", value: "Verified", delay: 0.4 },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="text-center px-4"
              >
                <h4 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">{stat.value}</h4>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">One partner, multiple capabilities.</h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              PT Ksatria Muda Perkasa is a national private company headquartered in Semarang, Central Java. We are built around integrated business solutions—designed to connect operational capability with client needs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Structured around responsiveness, professionalism, and accountable delivery, our ambition is to grow through trusted partnerships, disciplined execution, and sustainable business relationships.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 border-b pb-2">Leadership</h4>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">Director</span>
                  <span className="text-amber-600 font-semibold">Agustinus Gurindra Aditya</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">Commissioner</span>
                  <span className="text-amber-600 font-semibold">Rahardian Rizqi Satia</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
             <div className="space-y-4">
                <div className="bg-blue-900 p-8 rounded-3xl text-white aspect-square flex flex-col justify-center items-center text-center shadow-lg hover:scale-105 transition-transform">
                  <Building2 size={48} className="text-amber-400 mb-4" />
                  <span className="font-bold uppercase tracking-widest text-sm">Domicile</span>
                  <span className="text-blue-200 mt-1 font-medium text-sm">Kota Semarang</span>
                </div>
                <div className="bg-amber-500 p-8 rounded-3xl text-blue-950 aspect-square flex flex-col justify-center items-center text-center shadow-lg hover:scale-105 transition-transform">
                  <FileText size={48} className="text-blue-950 mb-4" />
                  <span className="font-bold uppercase tracking-widest text-sm">Legal Entity</span>
                  <span className="text-amber-900 text-[10px] mt-2 font-bold break-all">AHU-0054477.AH.01.01.TAHUN 2026</span>
                </div>
             </div>
             <div className="space-y-4 pt-8">
                <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl text-slate-900 aspect-square flex flex-col justify-center items-center text-center shadow-lg hover:scale-105 transition-transform">
                  <ShieldCheck size={48} className="text-blue-900 mb-4" />
                  <span className="font-bold uppercase tracking-widest text-sm">Status</span>
                  <span className="text-slate-500 text-sm mt-1 font-medium">Closed Company</span>
                </div>
                <div className="bg-slate-900 p-8 rounded-3xl text-white aspect-square flex flex-col justify-center items-center text-center shadow-lg hover:scale-105 transition-transform">
                  <TrendingUp size={48} className="text-amber-500 mb-4" />
                  <span className="font-bold uppercase tracking-widest text-sm">Growth</span>
                  <span className="text-slate-400 text-xs mt-2 font-medium">Sustainable Partnerships</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-white border-y border-slate-200">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Our Business Platform</h2>
          <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">Our Capabilities</h3>
          <p className="text-slate-600 text-lg font-medium">
            Supported by a broad operational-service base, we deliver solutions across construction, trade, logistics, professional services, and IT.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: (index % 3) * 0.15, duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group hover:border-amber-300"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300 shadow-md">
                {React.cloneElement(service.icon, { className: "text-amber-500 group-hover:text-blue-900 transition-colors" })}
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section id="why-us" className="py-24 px-6 bg-slate-50 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Value Proposition</h2>
          <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">Why Work With KMP?</h3>
          <p className="text-slate-600 text-lg font-medium">
            Our differentiation is built around integration, responsiveness and accountable delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Integrated', desc: 'Multiple business capabilities under one corporate platform.' },
            { title: 'Responsive', desc: 'Solutions designed around the actual operational requirement.' },
            { title: 'Professional', desc: 'Clear scope, documentation and accountable execution.' },
            { title: 'Connected', desc: 'Ability to coordinate across suppliers, workforce and partners.' },
            { title: 'Practical', desc: 'Business-first solutions rather than one-size-fits-all offerings.' },
            { title: 'Growth-Minded', desc: 'Built to develop long-term relationships, not one-off transactions.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="w-8 h-8 shrink-0 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-black">
                <CheckCircle size={16} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-1">{item.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="contact" className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-blue-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-4 border-amber-500 shadow-2xl"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[400px] h-[400px] bg-blue-800 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] bg-blue-950 rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Let's Connect</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Discuss your project requirements with PT Ksatria Muda Perkasa.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:081343445951" className="bg-amber-500 text-blue-950 px-10 py-4 rounded-xl font-black text-lg hover:bg-amber-400 transition-colors shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
                <Phone size={24} />
                0813 4344 5951
              </a>
            </div>
            <p className="text-blue-200 mt-12 text-sm font-bold tracking-widest uppercase">TRUST • CAPABILITY • DELIVERY</p>
          </div>
        </motion.div>
      </section>

    </div>
  );
}