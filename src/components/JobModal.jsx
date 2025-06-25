import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Tag,
  Home,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  Award,
  Building,
} from "lucide-react";

const JobModal = ({ job, isOpen, onClose }) => {
  if (!job) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 relative">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </motion.button>

              <div className="pr-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold mb-2"
                >
                  {job.posisi_magang}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl opacity-90 flex items-center gap-2"
                >
                  <Building size={20} />
                  {job.mitra}
                </motion.p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Quick Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <Users className="text-blue-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600">Posisi Tersedia</p>
                  <p className="text-xl font-bold text-gray-800">
                    {job.jumlah}
                  </p>
                </div>

                {job.gaji && (
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <DollarSign
                      className="text-green-600 mx-auto mb-2"
                      size={24}
                    />
                    <p className="text-sm text-gray-600">Gaji</p>
                    <p className="text-lg font-bold text-gray-800">
                      {job.gaji}
                    </p>
                  </div>
                )}

                {job.durasi && (
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <Clock className="text-purple-600 mx-auto mb-2" size={24} />
                    <p className="text-sm text-gray-600">Durasi</p>
                    <p className="text-lg font-bold text-gray-800">
                      {job.durasi}
                    </p>
                  </div>
                )}

                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                  <Home className="text-yellow-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600">Tempat Tinggal</p>
                  <p className="text-lg font-bold text-gray-800">
                    {job.tempat_tinggal}
                  </p>
                </div>
              </motion.div>

              {/* Location & Category */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-blue-600" size={20} />
                    <h3 className="font-semibold text-gray-800">Lokasi</h3>
                  </div>
                  <p className="text-gray-700">{job.provinsi}</p>
                  {job.lokasi_penempatan && (
                    <p className="text-sm text-gray-600 mt-1">
                      {job.lokasi_penempatan}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="text-green-600" size={20} />
                    <h3 className="font-semibold text-gray-800">Kategori</h3>
                  </div>
                  <p className="text-gray-700">{job.kategori_posisi}</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Deskripsi Posisi
                </h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {job.deskripsi}
                  </p>
                </div>
              </motion.div>

              {/* Requirements & Benefits */}
              {(job.requirements || job.benefits) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {job.requirements && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="text-blue-600" size={20} />
                        Persyaratan
                      </h3>
                      <div className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-center gap-3 bg-blue-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {job.benefits && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Award className="text-green-600" size={20} />
                        Benefit
                      </h3>
                      <div className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-center gap-3 bg-green-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Daftar Sekarang
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JobModal;
