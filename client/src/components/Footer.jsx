import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-gray-200/30  shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Aqua<span className="text-primary">Nest</span>
          </h2>
          <p className="max-w-[410px] mt-6">
            Bringing the underwater world to you – Aquanest is your one-stop
            destination for vibrant aquatic life and top-quality fish care
            essentials. Thanks for choosing us to enrich your aquarium journey!
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-700/90">
        Copyright {new Date().getFullYear()} © Amna Saleem & Ayesha Sammad All
        Right Reserved.
      </p>
    </div>
  );
};
export default Footer;
