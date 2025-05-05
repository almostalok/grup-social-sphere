
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full transition-all duration-300 group-hover:scale-150"></div>
      
      <div className="w-12 h-12 bg-gradient-to-br from-grupmate-purple to-purple-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-sm relative z-10">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-grupmate-purple group-hover:to-purple-400 absolute bottom-0 left-0 transition-all duration-500"></div>
    </motion.div>
  );
};

export default FeatureCard;
