import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c] via-[#142e4a] to-[#0f2440]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,196,225,0.1),transparent_50%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-20 xl:px-32 pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 text-white/60 border-b border-white/10">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white tracking-tight">
              Aqua<span className="text-accent">Nest</span>
            </h2>
            <p className="max-w-[380px] mt-5 text-sm leading-relaxed">
              Bringing the underwater world to you. Your one-stop destination for vibrant aquatic life and top-quality fish care essentials.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white mb-4">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-2.5">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className="hover:text-accent transition-colors duration-200">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="pt-6 text-center text-xs text-white/30 font-mono">
          Copyright {new Date().getFullYear()} © Saad Warraich. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
