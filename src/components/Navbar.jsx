import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-gray-800">SIMBELMAWA</span>
          </motion.div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            <span className="text-sm">
              Update:{" "}
              {new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
