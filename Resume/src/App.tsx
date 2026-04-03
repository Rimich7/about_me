import { AlertTriangle, Mail, Phone, Send, Code2, Terminal, Cpu, User, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ffcc00] font-mono flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#ffcc00 1px, transparent 1px), linear-gradient(90deg, #ffcc00 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl w-full relative z-10 border-4 border-[#ffcc00] bg-black/80 backdrop-blur-sm box-glow">
        
        {/* Top Warning Tape */}
        <div className="h-12 bg-stripes-slow w-full flex items-center justify-between px-4 overflow-hidden border-b-4 border-[#ffcc00]">
          <span className="text-black font-black text-xl tracking-widest uppercase">Внимание</span>
          <span className="text-black font-black text-xl tracking-widest hidden sm:inline">Закрытая зона</span>
          <span className="text-black font-black text-xl tracking-widest uppercase">Внимание</span>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b-2 border-dashed border-[#ffcc00]/50 pb-8 mb-8">
            <div className="w-48 h-64 shrink-0 border-4 border-[#ffcc00] p-1 bg-[#1a1a1a] relative group">
              <div className="absolute inset-0 bg-stripes opacity-20 group-hover:opacity-40 transition-opacity"></div>
              {/* User Avatar */}
              <div className="w-full h-full bg-black flex items-center justify-center relative z-10 overflow-hidden">
                {/* ВАЖНО: положите ваше фото под именем profile.jpg в папку public/ */}
                <img 
                  src="/profile.jpg" 
                  alt="Роман Кольчугин" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                  }} 
                />
                <User size={80} className="text-[#ffcc00] hidden absolute" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-red-600 text-white text-xs px-2 py-1 font-bold border border-red-800 animate-pulse">
                УРОВЕНЬ ДОСТУПА 4
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-red-500">
                <AlertTriangle size={32} className="animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider glitch text-white text-glow" data-text="Кольчугин Роман">
                  Кольчугин Роман
                </h1>
                <AlertTriangle size={32} className="animate-pulse hidden md:block" />
              </div>
              
              <div className="inline-block bg-[#ffcc00] text-black px-4 py-1 text-xl font-bold uppercase tracking-widest transform -skew-x-12">
                Fullstack Разработчик
              </div>
              
              <div className="text-gray-400 text-lg flex items-center justify-center md:justify-start gap-2">
                <ChevronRight className="text-[#ffcc00]" size={20} />
                Возраст: <span className="text-white font-bold">20 лет</span>
              </div>
            </div>
          </div>

          {/* Summary / About */}
          <div className="mb-8 border-l-4 border-[#ffcc00] bg-[#111] p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-stripes opacity-20 transform translate-x-4 -translate-y-4 rotate-45"></div>
            <h3 className="text-[#ffcc00] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <Terminal size={18} /> Детали миссии
            </h3>
            <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed">
              &gt; ИНИЦИАЛИЗАЦИЯ ПРОВЕРКИ ПРОФИЛЯ...<br/>
              &gt; СТАТУС: ПОДТВЕРЖДЕН.<br/>
              &gt; Fullstack разработчик, специализирующийся на надежных веб-приложениях и системной архитектуре. 
              Объединяю высокопроизводительный backend (C++, Python) и динамичные интерактивные frontend-решения (React). 
              Готов к немедленному развертыванию для выполнения сложных инженерных задач.
            </p>
          </div>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-widest border-l-4 border-[#ffcc00] pl-3 flex items-center gap-2">
                <Terminal size={24} /> Каналы связи
              </h2>
              
              <div className="space-y-4 bg-[#111] p-6 border border-[#ffcc00]/30 relative">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ffcc00]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ffcc00]"></div>

                <div className="flex items-center gap-4 hover:bg-[#ffcc00]/10 p-2 transition-colors cursor-crosshair">
                  <Phone className="text-[#ffcc00]" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Линия связи</div>
                    <a href="tel:+79180094649" className="text-lg text-white hover:text-[#ffcc00]">+7 (918) 009-46-49</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:bg-[#ffcc00]/10 p-2 transition-colors cursor-crosshair">
                  <Mail className="text-[#ffcc00]" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Зашифрованный Email</div>
                    <a href="mailto:fustroman23@mail.ru" className="text-lg text-white hover:text-[#ffcc00]">fustroman23@mail.ru</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:bg-[#ffcc00]/10 p-2 transition-colors cursor-crosshair">
                  <Send className="text-[#ffcc00]" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Защищенный Telegram</div>
                    <a href="https://t.me/Rimich23" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-[#ffcc00]">@Rimich23</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Experience */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-widest border-l-4 border-red-500 pl-3 flex items-center gap-2 text-red-500">
                <Cpu size={24} /> Основные протоколы
              </h2>
              
              <div className="space-y-6 bg-[#111] p-6 border border-red-500/30 relative">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>

                {/* React */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm uppercase">
                    <span className="flex items-center gap-2 text-white"><Code2 size={16} className="text-[#61dafb]" /> React</span>
                    <span className="text-[#61dafb]">Активен</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#61dafb] w-[90%] relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* C++ */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm uppercase">
                    <span className="flex items-center gap-2 text-white"><Terminal size={16} className="text-[#00599C]" /> C++</span>
                    <span className="text-[#00599C]">Системный</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00599C] w-[85%] relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Python */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm uppercase">
                    <span className="flex items-center gap-2 text-white"><Code2 size={16} className="text-[#FFD43B]" /> Python</span>
                    <span className="text-[#FFD43B]">Развернут</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFD43B] w-[80%] relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* System status footer */}
          <div className="mt-12 pt-6 border-t-2 border-dashed border-[#ffcc00]/30 flex justify-between items-center text-xs text-gray-600 uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
              Система в сети
            </div>
            <div>Код дост.: <span className="text-[#ffcc00]">8X-99B</span></div>
          </div>
        </div>

        {/* Bottom Warning Tape */}
        <div className="h-8 bg-stripes-slow w-full border-t-4 border-[#ffcc00] opacity-80"></div>
      </div>
    </div>
  );
}

export default App;
