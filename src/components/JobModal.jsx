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
  Calendar,
  BookOpen,
  Target,
  Info,
  MapPinIcon,
  Hash,
  ClipboardList,
  GraduationCap,
  Settings,
  Heart,
  Star,
  TrendingUp,
  ExternalLink,
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

                {job.gaji && job.gaji.trim() && (
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

                {job.durasi && job.durasi.trim() && (
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

              {/* Job Information Section - SIMBELMAWA Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Basic Information */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Info size={20} />
                      Informasi Dasar
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Kategori Posisi
                        </label>
                        <p className="text-gray-800 font-medium">
                          {job.kategori_posisi}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Jumlah Posisi
                        </label>
                        <p className="text-gray-800 font-medium">
                          {job.jumlah} orang
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Penyedia Tempat Tinggal
                        </label>
                        <p className="text-gray-800 font-medium">
                          {job.tempat_tinggal}
                        </p>
                      </div>
                      {job.created_at && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">
                            Tanggal Posting
                          </label>
                          <p className="text-gray-800 font-medium">
                            {new Date(job.created_at).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      )}
                      {job.id_lowongan && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">
                            ID Lowongan
                          </label>
                          <p className="text-gray-800 font-medium">
                            #{job.id_lowongan}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPinIcon size={20} />
                      Lokasi Penempatan
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {job.lokasi_penempatan ? (
                      <div className="bg-green-50 rounded-lg p-4">
                        <label className="text-sm font-medium text-gray-600 block mb-2">
                          Detail Lokasi Penempatan
                        </label>
                        <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                          {job.lokasi_penempatan}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {job.provinsi && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Provinsi
                            </label>
                            <p className="text-gray-800 font-medium">
                              {job.provinsi}
                            </p>
                          </div>
                        )}
                        {job.kota && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Kota/Kabupaten
                            </label>
                            <p className="text-gray-800 font-medium">
                              {job.kota}
                            </p>
                          </div>
                        )}
                        {job.kecamatan && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Kecamatan
                            </label>
                            <p className="text-gray-800 font-medium">
                              {job.kecamatan}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Job Description */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <BookOpen size={20} />
                      Deskripsi Posisi
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mitra Information */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Building size={20} />
                      Informasi Mitra
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600">
                            Nama Mitra
                          </label>
                          <p className="text-gray-800 font-semibold text-lg">
                            {job.mitra}
                          </p>
                        </div>
                        {job.mitra_slug && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Kode Mitra
                            </label>
                            <p className="text-gray-800 font-medium">
                              {job.mitra_slug}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Requirements & Benefits (if available) */}
                {(job.requirements && job.requirements.length > 0) ||
                (job.benefits && job.benefits.length > 0) ? (
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Target size={20} />
                        Persyaratan & Benefit
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <CheckCircle
                                className="text-blue-600"
                                size={18}
                              />
                              Persyaratan
                            </h4>
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

                        {job.benefits && job.benefits.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <Award className="text-green-600" size={18} />
                              Benefit
                            </h4>
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
                                  <span className="text-gray-700">
                                    {benefit}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Info size={20} />
                        Informasi Tambahan
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="text-center py-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 italic">
                          Detail persyaratan dan benefit akan diinformasikan
                          saat proses pendaftaran
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional SIMBELMAWA-style Sections */}

                {/* Rincian Penugasan/Tanggung Jawab */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <ClipboardList size={20} />
                      Rincian Penugasan/Tanggung Jawab
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-8 bg-cyan-50 rounded-xl">
                      <ClipboardList
                        className="text-cyan-400 mx-auto mb-4"
                        size={48}
                      />
                      <p className="text-gray-600 italic mb-2">
                        Rincian tugas dan tanggung jawab akan dijelaskan lebih
                        detail
                      </p>
                      <p className="text-sm text-gray-500">
                        saat proses orientasi dan pengenalan tempat magang
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kriteria Peserta Magang */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users size={20} />
                      Kriteria Peserta Magang
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Latar Belakang Pendidikan */}
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <GraduationCap
                            className="text-emerald-600"
                            size={18}
                          />
                          Latar Belakang Pendidikan
                        </h4>
                        <div className="text-center py-4">
                          <p className="text-gray-600 italic">
                            Persyaratan pendidikan akan diinformasikan saat
                            pendaftaran
                          </p>
                        </div>
                      </div>

                      {/* Kompetensi Teknis */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Settings className="text-blue-600" size={18} />
                          Kompetensi Teknis
                        </h4>
                        <div className="text-center py-4">
                          <p className="text-gray-600 italic">
                            Keterampilan teknis yang dibutuhkan akan dijelaskan
                            detail
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            pada tahap seleksi dan wawancara
                          </p>
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Heart className="text-purple-600" size={18} />
                          Soft Skills
                        </h4>
                        <div className="text-center py-4">
                          <p className="text-gray-600 italic">
                            Kemampuan interpersonal dan karakter yang diharapkan
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            akan dibahas dalam proses seleksi
                          </p>
                        </div>
                      </div>

                      {/* Persyaratan Khusus */}
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Star className="text-orange-600" size={18} />
                          Persyaratan Khusus
                        </h4>
                        <div className="text-center py-4">
                          <p className="text-gray-600 italic">
                            Persyaratan tambahan dan khusus akan disampaikan
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            sesuai kebutuhan posisi yang dilamar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Capaian Pembelajaran */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <TrendingUp size={20} />
                      Capaian Pembelajaran
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-8 bg-rose-50 rounded-xl">
                      <TrendingUp
                        className="text-rose-400 mx-auto mb-4"
                        size={48}
                      />
                      <p className="text-gray-600 italic mb-2">
                        Target pembelajaran dan kompetensi yang akan dicapai
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        akan dijelaskan dalam program orientasi magang
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-rose-200">
                        <p className="text-sm text-gray-600">
                          💡 <strong>Tips:</strong> Capaian pembelajaran akan
                          disesuaikan dengan kurikulum program studi dan
                          kebutuhan industri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Note untuk Halaman Asli SIMBELMAWA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="mt-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <ExternalLink
                      className="text-amber-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">
                        📋 Informasi Lengkap
                      </h4>
                      <p className="text-amber-700 text-sm mb-3 leading-relaxed">
                        Untuk melihat detail lengkap dan informasi terkini
                        mengenai lowongan ini, silakan kunjungi halaman resmi
                        SIMBELMAWA:
                      </p>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            `https://simbelmawa.kemdikbud.go.id/magang/lowongan/lowongan-${job.id_lowongan}`,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg relative z-10 cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        Lihat di SIMBELMAWA Resmi
                      </motion.button>
                      <p className="text-xs text-amber-600 mt-2">
                        ID Lowongan: #{job.id_lowongan}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🚀 Daftar Sekarang
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.button>
                <p className="text-sm text-gray-500 mt-3">
                  * Klik tombol di atas untuk melanjutkan ke proses pendaftaran
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JobModal;
