import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronRight, Activity, Dumbbell, ActivitySquare } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroImg from './assets/hero.jpg';



import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';
import gallery3 from './assets/gallery3.jpg';
import gallery4 from './assets/gallery4.jpg';
import gallery5 from './assets/gallery5.jpg';
import gallery6 from './assets/gallery6.jpg';
import gallery7 from './assets/gallery7.jpg';
import gallery8 from './assets/gallery8.jpg';
import gallery9 from './assets/gallery9.jpg';
import gallery10 from './assets/gallery10.jpg';
import gallery11 from './assets/gallery11.jpg';
import gallery12 from './assets/gallery12.jpg';
import gallery13 from './assets/gallery13.jpg';

const Instagram = ({ size = 24, color = "currentColor", className = "", style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const WhatsApp = ({ size = 32, color = "#fff", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

import trainer1 from './assets/trainer1.jpg';
import trainer2 from './assets/trainer2.jpg';
import premiumHero from './assets/premium_hero.jpg';

// Custom Cursor Component
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    const onMouseMove = (e) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const addHoverClass = () => document.body.classList.add('cursor-hover');
    const removeHoverClass = () => document.body.classList.remove('cursor-hover');

    const setupInteractiveElements = () => {
      const elements = document.querySelectorAll('a, button, .interactive, .pricing-card, .trainer-card, .bento-item');
      elements.forEach(el => {
        el.addEventListener('mouseenter', addHoverClass);
        el.addEventListener('mouseleave', removeHoverClass);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    setupInteractiveElements();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      const elements = document.querySelectorAll('a, button, .interactive, .pricing-card, .trainer-card, .bento-item');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

// GlowCard Component (Mouse Tracking Gradient)
const GlowCard = ({ children, className = "", style = {} }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`glow-effect ${className}`} 
      onMouseMove={handleMouseMove}
      style={style}
    >
      {children}
    </div>
  );
};

const useScrollReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect(); };
  }, []);
  return ref;
};

const Reveal = ({ children, className = "", delay = 0, style = {} }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

const Navbar = () => (
  <nav style={{
    position: 'fixed', top: 0, width: '100%', padding: '20px 10%',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 100
  }}>
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)' }}>
        <img src={logoImg} alt="Gym Sporium Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h2 className="text-gradient" style={{ margin: 0, fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 900 }}>GYM SPORIUM</h2>
    </a>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <a href="#about" className="nav-link">Hakkımızda</a>
      <a href="#programs" className="nav-link">Programlar</a>
      <a href="#pricing" className="nav-link">Paketler</a>
      <a href="#trainers" className="nav-link">Eğitmenler</a>
      <a href="#social" className="nav-link">Instagram</a>
      <a href="#contact" className="nav-link">İletişim</a>
      <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Üye Ol</a>
    </div>
  </nav>
);

const InfiniteMarquee = ({ text }) => (
  <div className="marquee-container">
    <div className="marquee-content">
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  </div>
);

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmi = (w / (h * h)).toFixed(1);
      
      let status = '';
      let recommendation = '';
      if (bmi < 18.5) { status = 'Zayıf'; recommendation = 'Kilo alma ve hacim kazanma odaklı PRO paketimiz tam size göre.'; }
      else if (bmi < 24.9) { status = 'Normal'; recommendation = 'Formunuzu korumak için STANDART paketimizle serbest ağırlık alanını değerlendirin.'; }
      else if (bmi < 29.9) { status = 'Fazla Kilolu'; recommendation = 'Yağ yakımı ve kardiyo odaklı PRO paketimizi şiddetle tavsiye ederiz.'; }
      else { status = 'Obezite'; recommendation = 'Uzman eşliğinde VIP Kişisel Eğitmen paketimizle sağlıklı bir dönüşüme başlayın.'; }
      
      setResult({ bmi, status, recommendation });
    }
  };

  return (
    <div className="bmi-container interactive">
      <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontStyle: 'italic' }}>İnteraktif <span className="text-gradient">Hedef</span></h3>
      <p style={{ color: '#ccc', marginBottom: '30px' }}>Vücut kitle indeksinizi hesaplayıp size en uygun paketi önerelim.</p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <input 
          type="number" 
          placeholder="Boy (cm)" 
          className="bmi-input interactive"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Kilo (kg)" 
          className="bmi-input interactive"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI} className="btn-primary" style={{ width: '100%', marginBottom: '20px' }}>Hesapla</button>
      
      {result && (
        <div className="bmi-result-box">
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)' }}>{result.bmi}</div>
          <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Durum: <strong>{result.status}</strong></div>
          <div style={{ color: '#ccc', fontStyle: 'italic' }}>{result.recommendation}</div>
        </div>
      )}
    </div>
  );
};

const Hero = () => (
  <section style={{
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10%',
    overflow: 'hidden',
    backgroundImage: `url(${premiumHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.6) 100%)', zIndex: 0 }}></div>
    <div className="hero-grid"></div>

    <div className="animate-fade-in" style={{ maxWidth: '800px', marginTop: '80px', zIndex: 1, position: 'relative' }}>
      <h1 style={{ fontSize: '6rem', lineHeight: '1', marginBottom: '20px', fontStyle: 'italic', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px' }}>
        LİMİTLERİ <span className="text-gradient">AŞ</span><br/>
      </h1>
      <h1 style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '30px', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.5)', fontStyle: 'italic', fontWeight: 900, textTransform: 'uppercase' }}>
        BAHANELERİ YOK ET
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#ccc', lineHeight: '1.6', maxWidth: '600px' }}>
        Gerçek değişim burada başlar. Şehrin en iyi atmosferinde, profesyonel ekipmanlarla potansiyelini keşfet.
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#pricing" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          KAYIT OL <ChevronRight size={20} />
        </a>
        <a href="#about" className="nav-link" style={{ padding: '16px 20px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}>
          Sistemi İncele
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding" style={{ position: 'relative' }}>
    <Reveal className="editorial-grid">
      <div className="editorial-text">
        <h2 style={{ fontStyle: 'italic' }}>GYM SPORIUM <br/><span className="text-gradient">FARKINI YAŞA</span></h2>
        <p style={{ color: '#ccc', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px' }}>
          Biz sadece bir spor salonu değiliz; biz, İzmir'in en agresif, en motive edici fitness kültürüyüz. "Hardest Worker in the Room" felsefesini benimsedik. Kendi sınırlarınla yüzleşeceğin bu atmosferde, dünya standartlarında ekipmanlar ve ödünsüz bir disiplin seni bekliyor.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
          <div>
            <Activity size={32} color="var(--accent)" style={{ marginBottom: '10px' }} />
            <h4 style={{ fontSize: '1.2rem' }}>Kişisel Takip</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Birebir odak.</p>
          </div>
          <div>
            <Dumbbell size={32} color="var(--accent)" style={{ marginBottom: '10px' }} />
            <h4 style={{ fontSize: '1.2rem' }}>Modern Ekipman</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ergonomik makineler.</p>
          </div>
        </div>
      </div>
      <div className="editorial-image-wrapper interactive">
        <img src={gallery1} alt="Kişisel Eğitim" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }} />
      </div>
    </Reveal>
    <div style={{ marginTop: '80px' }}>
      <BMICalculator />
    </div>
  </section>
);

const Programs = () => (
  <section id="programs" className="section-padding" style={{ backgroundColor: 'var(--secondary)' }}>
    <Reveal>
      <h2 className="section-title">Eğitim <span className="text-gradient">Sınıfları</span></h2>
    </Reveal>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
      
      {[ 
        { img: gallery6, title: 'Spinning & Kondisyon', desc: 'Grup dersleri ve bireysel antrenmanlar için profesyonel spinning bisikletleri.' },
        { img: gallery7, title: 'Kardiyo Alanı', desc: 'Geniş koşu bandı ve eliptik bisiklet parkuru ile dayanıklılığınızı artırın.' },
        { img: gallery10, title: 'Serbest Ağırlık', desc: 'Dambıl setleri, bench press ve smith machine ile maksimum güç inşası.' },
        { img: gallery8, title: 'Makine Parkuru', desc: 'Tüm kas gruplarını izole çalıştıran son teknoloji izotonik makineler.' }
      ].map((prog, idx) => (
        <Reveal key={idx} delay={idx * 150}>
          <GlowCard className="program-card">
            <img src={prog.img} alt={prog.title} />
            <div className="overlay">
              <h3 style={{ marginBottom: '10px', fontSize: '1.8rem', fontStyle: 'italic' }}>{prog.title}</h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.5' }}>{prog.desc}</p>
            </div>
          </GlowCard>
        </Reveal>
      ))}

    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <Reveal>
      <h2 className="section-title">Üyelik <span className="text-gradient">Paketleri</span></h2>
    </Reveal>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
      
      <Reveal delay={100}>
        <GlowCard className="pricing-card">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>STANDART</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--accent)', marginBottom: '20px' }}>1 AYLIK</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#ccc', lineHeight: '2.5' }}>
            <li>Sınırsız Salon Kullanımı</li>
            <li>Serbest Ağırlık Alanı</li>
            <li>Kardiyo & Kondisyon</li>
            <li style={{ textDecoration: 'line-through', opacity: 0.5 }}>Özel Dolap Kullanımı</li>
          </ul>
          <a href="#contact" className="btn-primary interactive" style={{ width: '100%' }}>Kayıt Ol</a>
        </GlowCard>
      </Reveal>

      <Reveal delay={200} style={{ transform: 'scale(1.05)', zIndex: 10 }}>
        <GlowCard className="pricing-card popular">
          <div className="popular-tag">EN ÇOK TERCİH EDİLEN</div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>PRO</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--accent)', marginBottom: '20px' }}>3 AYLIK</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#fff', lineHeight: '2.5' }}>
            <li>Sınırsız Salon Kullanımı</li>
            <li>Tüm Grup Dersleri (Spinning vb.)</li>
            <li>Özel Dolap Kullanımı</li>
            <li>Vücut Analizi</li>
          </ul>
          <a href="#contact" className="btn-primary interactive" style={{ width: '100%', boxShadow: '0 0 20px rgba(0,255,204,0.3)' }}>Hemen Başla</a>
        </GlowCard>
      </Reveal>

      <Reveal delay={300}>
        <GlowCard className="pricing-card">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>VIP</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--accent)', marginBottom: '20px' }}>YILLIK</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#ccc', lineHeight: '2.5' }}>
            <li>Sınırsız & VIP Kullanım</li>
            <li>Ücretsiz Kişisel Eğitmen (1 Seans)</li>
            <li>Kişiye Özel Antrenman Programı</li>
            <li>Sınırsız Destek</li>
          </ul>
          <a href="#contact" className="btn-primary interactive" style={{ width: '100%' }}>Kayıt Ol</a>
        </GlowCard>
      </Reveal>

    </div>
  </section>
);

const Trainers = () => (
  <section id="trainers" className="section-padding" style={{ backgroundColor: 'var(--secondary)' }}>
    <Reveal>
      <h2 className="section-title">Uzman <span className="text-gradient">Kadromuz</span></h2>
    </Reveal>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <Reveal delay={100}>
        <GlowCard className="trainer-card">
          <img src={trainer1} alt="Baş Antrenör" />
          <div className="trainer-info">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Ahmet Yılmaz</h3>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Baş Antrenör</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '10px' }}>Vücut Geliştirme & Güç Antrenmanı</p>
          </div>
        </GlowCard>
      </Reveal>

      <Reveal delay={200}>
        <GlowCard className="trainer-card">
          <img src={trainer2} alt="Kişisel Eğitmen" />
          <div className="trainer-info">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Ayşe Demir</h3>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Fitness Eğitmeni</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '10px' }}>Spinning & Pilates Uzmanı</p>
          </div>
        </GlowCard>
      </Reveal>

    </div>
  </section>
);

const SocialInstagram = () => (
  <section id="social" className="section-padding">
    <Reveal delay={100} style={{ textAlign: 'center', marginBottom: '50px' }}>
      <a href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" style={{ display: 'inline-block' }} className="interactive">
        <Instagram size={48} color="var(--accent)" style={{ marginBottom: '20px' }} />
      </a>
      <h2 style={{ fontSize: '3rem', marginBottom: '10px', fontStyle: 'italic' }}>BİZİ TAKİP <span className="text-gradient">EDİN</span></h2>
      <a href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', textDecoration: 'none' }} className="interactive">
        @gymsporium (1,418 Followers)
      </a>
    </Reveal>
    
    <Reveal delay={200} className="insta-grid">
      {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13].map((img, idx) => (
        <a key={idx} href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" className="insta-item interactive">
          <img src={img} alt={`Instagram Post ${idx}`} />
          <div className="insta-overlay">
            <Instagram size={40} />
          </div>
        </a>
      ))}
    </Reveal>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--secondary)', position: 'relative' }}>
    <Reveal className="bento-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      
      <div className="glass" style={{ padding: '50px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '30px', fontStyle: 'italic' }}>BİZE <span className="text-gradient">ULAŞIN</span></h2>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <Clock color="var(--accent)" size={32} />
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Çalışma Saatleri</h4>
            <p style={{ color: '#ccc' }}>Hafta içi: 10:00 - 22:30</p>
            <p style={{ color: '#ccc' }}>Cumartesi: 10:00 - 18:00</p>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Pazar: Kapalı (Yaz Dönemi)</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <MapPin color="var(--accent)" size={32} />
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Adres</h4>
            <p style={{ color: '#ccc', lineHeight: '1.5' }}>
              GymSporium Spor Salonu<br/>
              Manavkuyu, 243. Sk. No:15 D:1G,<br/>
              35535 Bayraklı/İzmir
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <a href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }} className="interactive">
            <Instagram color="var(--accent)" size={32} />
          </a>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Sosyal Medya</h4>
            <a href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" style={{ color: '#ccc', textDecoration: 'none' }} className="interactive">@gymsporium</a>
          </div>
        </div>
      </div>

      <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.9748685168013!2d27.1985114!3d38.4634014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d379483cc77%3A0x609ba6dae431a992!2sGymSporium%20Spor%20Salonu!5e0!3m2!1str!2str!4v1715020800000!5m2!1str!2str" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      
    </Reveal>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#000', padding: '40px 10%', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)' }}>
        <img src={logoImg} alt="Gym Sporium Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <h2 className="text-gradient" style={{ margin: 0, fontStyle: 'italic', fontWeight: 900 }}>GYM SPORIUM</h2>
        <p style={{ color: '#666', marginTop: '5px', fontSize: '0.9rem' }}>&copy; 2026 Gym Sporium. Tüm hakları saklıdır.</p>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '20px' }}>
      <a href="https://www.instagram.com/gymsporium/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} className="interactive">
        <Instagram size={24} className="hover-accent" />
      </a>
    </div>
  </footer>
);

function App() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <InfiniteMarquee text="NO EXCUSES &bull; LİMİTLERİ AŞ &bull; GYM SPORIUM &bull; PUSH HARDER &bull;" />
      <About />
      <Programs />
      <Pricing />
      <Trainers />
      <SocialInstagram />
      <Contact />
      <Footer />
      
      <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer" className="whatsapp-float interactive" aria-label="WhatsApp ile İletişime Geç">
        <WhatsApp size={36} />
      </a>
    </div>
  );
}

export default App;
