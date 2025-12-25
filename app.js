import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Download, Layout, Sparkles, User } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: 'Asmita Basak',
    role1: 'Electronics & Communication Engineering',
    role2: 'Frontend Developer',
    role3: 'AI/ML Enthusiast'
  });

  const bannerRef = useRef(null);

  const downloadBanner = async () => {
    if (bannerRef.current === null) return;
    const dataUrl = await toPng(bannerRef.current, { 
      canvasWidth: 1584, 
      canvasHeight: 396,
      pixelRatio: 2 
    });
    const link = document.createElement('a');
    link.download = `covercraft-banner.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans p-4 md:p-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold tracking-widest uppercase text-sm">
          <Sparkles size={16} /> CoverCraft Premium
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white text-center">
          Design Your Professional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            LinkedIn Presence
          </span>
        </h1>
      </div>

      {/* Banner Preview Area */}
      <div className="flex justify-center mb-16 group">
        <div className="relative border-4 border-slate-800 rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <div 
            ref={bannerRef}
            className="bg-[#0f172a] flex items-center px-16 relative overflow-hidden"
            style={{ width: '1584px', height: '396px', transform: 'scale(0.45)', transformOrigin: 'top center' }}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-10 opacity-10 text-blue-400 font-mono text-9xl">&lt;/&gt;</div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-8xl font-black text-white mb-6 uppercase tracking-tighter italic">
                {formData.name}
              </h2>
              <div className="space-y-3 text-3xl font-semibold text-slate-400">
                <p className="flex items-center gap-4"><span className="text-blue-500">●</span> {formData.role1}</p>
                <p className="flex items-center gap-4"><span className="text-purple-500">●</span> {formData.role2}</p>
                <p className="flex items-center gap-4"><span className="text-pink-500">●</span> {formData.role3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="max-w-2xl mx-auto bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Layout size={20} className="text-blue-500" /> Customize Profile Details
        </h3>
        
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
            <input 
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Academic Role</label>
              <input 
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none"
                value={formData.role1}
                onChange={(e) => setFormData({...formData, role1: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Professional Role</label>
              <input 
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none"
                value={formData.role2}
                onChange={(e) => setFormData({...formData, role2: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Passion/Interest</label>
            <input 
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none"
              value={formData.role3}
              onChange={(e) => setFormData({...formData, role3: e.target.value})}
            />
          </div>
        </div>

        <button 
          onClick={downloadBanner}
          className="w-full mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3"
        >
          <Download size={20} /> Download PNG Asset
        </button>
      </div>
    </div>
  );
}
