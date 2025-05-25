import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export default function ContactUs() {
  const { axios, user } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/message/send", {
        name,
        email,
        message,
      });
      if (data.success) {
        toast.success(data.message);
        setIsDisabled(true);
        setMessage("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
  }, [user]);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 px-6 py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl w-full bg-white p-10 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left Column - Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary">Contact AquaNest</h1>
          <p className="text-gray-600">
            At AquaNest, we provide a serene and vibrant ecosystem for aquatic
            life lovers. Whether you're looking for exotic fish, aquarium
            supplies, or expert guidance, we are here to help.
          </p>
          <p className="text-gray-500">
            Feel free to reach out to us through any of the channels below. Our
            team is ready to assist you with all your aquascaping needs.
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#e0f2fe] p-4 rounded-xl"
            >
              <Mail className="text-[#1e3a8a]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">contact@aquanest.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#e0f2fe] p-4 rounded-xl"
            >
              <Phone className="text-[#1e3a8a]" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+92 (301) 7353846</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#e0f2fe] p-4 rounded-xl"
            >
              <MapPin className="text-[#1e3a8a]" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">123 Aqua St, Ocean City</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Message Form Placeholder */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-gray-500 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dull transition-colors w-full"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
