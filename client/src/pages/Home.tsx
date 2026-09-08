import { ArrowLeft, ArrowUpLeft, ChevronLeft, Mail, Menu, Phone, X, Cpu, Globe, Award, Wrench, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import "../polish.css";
import "../logo.css";
import "../section-separation.css";

const projects = [
  {
    title: "حاضنة وفرز البيض بالذكاء الاصطناعي",
    description: "نظام يصنّف البيض إلى ملقّح وغير ملقّح في اليوم الثالث من الاحتضان، بالاعتماد على الذكاء الاصطناعي والرؤية الحاسوبية.",
    note: "براءة اختراع محلية · زيادة إنتاجية صيصان الفقس حتى 30%",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/HbpOYOxJysjpnCXR.jpg",
    alt: "آلية حضن وفرز البيض المطورة من سادة التحكم",
    path: "projects/smart-incubator",
  },
  {
    title: "AutoMate X",
    description: "نظام أتمتة ومراقبة لخطوط الإنتاج في معامل الألبسة، يتيح متابعة الإنتاج من المكتب وعن بُعد.",
    note: "أتمتة · مراقبة · إدارة إنتاج",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/MDfzByinmkrhsRps.jpg",
    alt: "وحدة رؤية ومراقبة مستخدمة ضمن نظام AutoMate X",
    path: "projects/automatex",
  },
  {
    title: "نظام أتمتة مدرسة عبد القادر بدران الشرعية",
    description: "نظام إدارة شامل يرقمن تسجيل الطلاب، وينظم عمل الإدارة، ويمنح الأهل وسيلة واضحة لمتابعة الطلاب.",
    note: "تطبيق جوال · إدارة مدرسية · متابعة أولياء الأمور",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/nnemqAteitXKqRUg.jpg",
    alt: "واجهات تطبيق مدرسة عبد القادر بدران الشرعية",
    path: "projects/school-app",
  },
  {
    title: "مكنة CNC لحفر الخشب",
    description: "تصميم وتصنيع مكنة لحفر الخشب والنقش على الأبواب الخشبية بخبرات محلية، مع خدمات صيانة سريعة.",
    note: "تصميم محلي · تصنيع · صيانة",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/DqiAepxOrdKPAgHj.png",
    alt: "تصميم مكنة CNC لحفر الخشب من مشاريع سادة التحكم",
    path: "projects/cnc-router",
  },
  {
    title: "أدوات زراعية لصواني الشتل",
    description: "أدوات عملية لفنيي الزراعة وأصحاب المشاتل لتسهيل زراعة صواني الشتل وإدخال أساليب حديثة للمشاتل البلاستيكية.",
    note: "زراعة ذكية · مشاتل · كلفة تشغيل منخفضة",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/WEATcOkfgBRxRptC.jpg",
    alt: "صينية شتل زراعية مطورة ضمن مشاريع الشركة",
    path: "projects/seedling-tools",
  },
];

const services = [
  {
    icon: <Cpu size={28} className="text-black mb-3" />,
    title: "الأنظمة المدمجة والأتمتة",
    desc: "تصميم وبناء الأجهزة الذكية وأنظمة التحكم الصناعي وتطوير الدوائر الإلكترونية."
  },
  {
    icon: <Globe size={28} className="text-black mb-3" />,
    title: "برمجة التطبيقات والبرمجيات",
    desc: "تطوير تطبيقات الموبايل والويب المتكاملة مع الأنظمة البرمجية والإدارية."
  },
  {
    icon: <Award size={28} className="text-black mb-3" />,
    title: "الذكاء الاصطناعي والرؤية الحاسوبية",
    desc: "دمج تقنيات المعالجة الصورية والرؤية الآلية لاتخاذ القرارات وتحليل الإنتاج."
  },
  {
    icon: <Wrench size={28} className="text-black mb-3" />,
    title: "التصنيع والصيانة الهندسية",
    desc: "تصميم وتصنيع الآلات الميكانيكية مثل آلات الـ CNC وتقديم خدمات الصيانة."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ppt-site" dir="rtl" style={{ backgroundColor: "#FAF7F2", color: "#1A1A1A", fontFamily: "sans-serif" }}>
      
      {/* ستايل استجابة سريعة للموبايل والنافبار */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? "flex" : "none"} !important;
            flex-direction: column !important;
            position: absolute !important;
            top: 100% !important;
            right: 0 !important;
            left: 0 !important;
            background-color: #FAF7F2 !important;
            padding: 1.5rem !important;
            border-bottom: 1px solid #E5DEC9 !important;
            gap: 1rem !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .responsive-split {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .hero-gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card {
            flex-direction: column !important;
          }
          .project-card img {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>

      {/* 1. Header & Navbar */}
      <header className="topbar" style={{ backgroundColor: "#F2ECE1", borderBottom: "1px solid #E5DEC9", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <a href="#home" className="wordmark logo-wordmark" aria-label="سادة التحكم" onClick={closeMenu}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/YhDNnPkTUAoVIycs.png" alt="شعار سادة التحكم" style={{ height: "80px" }} />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة" style={{ background: "none", border: "none", cursor: "pointer" }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="#about" onClick={closeMenu}>عن الشركة</a>
          <a href="#services" onClick={closeMenu}>خدماتنا</a>
          <a href="#projects" onClick={closeMenu}>مشاريعنا</a>
          <a href="#achievements" onClick={closeMenu}>إنجازاتنا</a>
          <a href="#vision" onClick={closeMenu}>رؤيتنا</a>
          <a href="#team" onClick={closeMenu}>فريقنا</a>
        </nav>
      </header>

      <main id="home">
     {/* 2. Hero Section */}
<section style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
  <div className="cover-copy" style={{ marginBottom: "2rem" }}>
    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800", lineHeight: "1.2", marginBottom: "1rem" }}>
      سادة التحكم <br />
      <span style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", fontWeight: "500", color: "#555" }}>لحلول الأتمتة والذكاء الاصطناعي</span>
    </h1>
    <p style={{ lineHeight: "1.6", color: "#4A4A4A", maxWidth: "600px" }}> شركة ناشئة متخصصة في حلول الأتمتة وهندسة الحواسيب، نطوّر أدوات واقعية للقطاعات التي تحتاج تقنية تصنع فرقًا يمكن قياسه.</p>
    <a href="#projects" className="line-button" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontWeight: "bold" }}>استكشف مشاريعنا <ArrowLeft size={17} /></a>
  </div>

 {/* شبكة الصور المائلة - كل صورتين في سطر */}
<div 
  className="hero-gallery-grid"
  style={{ 
    display: "flex", 
    flexWrap: "wrap",
    gap: "15px 12px", // مسافة 15px عمودية و 12px عرضية بين الصور
    position: "relative", 
    overflow: "hidden", 
    borderRadius: "12px",
    alignItems: "stretch"
  }}
>
  {/* 1. الصورة الأولى (الحاضنة الذكية) - السطر الأول (يمين) */}
  <div style={{ flex: "1 1 calc(50% - 6px)", height: "240px" }}>
    <img 
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/zExURtowCysrXNwS.jpg" 
      alt="الحاضنة الذكية" 
      style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }} 
    />
  </div>

  {/* 2. الشعار - السطر الأول (يسار) */}
  <div 
    style={{ 
      flex: "1 1 calc(50% - 6px)", 
      height: "240px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#FAF7F2",
      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
      padding: "0.5rem"
    }}
  >
    <img 
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/YhDNnPkTUAoVIycs.png" 
      alt="شعار سادة التحكم" 
      style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} 
    />
  </div>

  {/* 4. الصورة الثالثة (فريق العمل) - السطر الثاني (يسار) */}
  <div style={{ flex: "1 1 calc(50% - 6px)", height: "240px" }}>
    <img 
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/qBWbdZxxrUabPyGq.jpg" 
      alt="فريق العمل" 
      style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }} 
    />
  </div>
  {/* 3. الصورة الثانية (الرؤية الحاسوبية) - السطر الثاني (يمين) */}
  <div style={{ flex: "1 1 calc(50% - 6px)", height: "240px" }}>
    <img 
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/vtnSNLStfCLsEEGw.jpg" 
      alt="الرؤية الحاسوبية" 
      style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }} 
    />
  </div>

</div>

</section>

        {/* 3. Stats Strip */}
        <section style={{ backgroundColor: "#F2ECE1", borderTop: "1px solid #E5DEC9", borderBottom: "1px solid #E5DEC9", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
            <div><h3 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>+5</h3><p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#4A4A4A" }}>مشاريع هندسية نوعية</p></div>
            <div><h3 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>1</h3><p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#4A4A4A" }}>براءة اختراع مسجلة</p></div>
            <div><h3 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>100%</h3><p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#4A4A4A" }}>خبرات وتطوير محلي</p></div>
            <div><h3 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>24/7</h3><p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#4A4A4A" }}>دعم وصيانة هندسية</p></div>
          </div>
        </section>

        {/* 4. About Section */}
        <section id="about" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          <div className="responsive-split" style={{ display: "flex", gap: "3rem", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold", lineHeight: "1.2", margin: 0 }}>
                  <br />
                <em style={{ fontStyle: "normal", color: "#8C6A38" }}>سادة التحكم</em>
              </h2>
            </div>
            <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column" }}>
              <article style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>رواد الحلول الهندسية والتحكم الآلي</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>تصميم وتنفيذ أنظمة ومكنات مؤتمتة تلبي احتياجات القطاعات المختلفة.</p>
              </article>
              <article style={{ borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>برمجة التطبيقات والبرمجيات</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>تطوير تطبيقات الموبايل والأنظمة البرمجية المتكاملة مع الأجهزة.</p>
              </article>
              <article style={{ borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>الاستشارات التقنية الهندسية</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>تقديم استشارات متخصصة في الأتمتة والتحكم والذكاء الاصطناعي.</p>
              </article>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          <b style={{ display: "block", marginBottom: "1.5rem", color: "#8C6A38" }}>خدماتنا مجالات عملنا</b>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {services.map((s, idx) => (
              <div key={idx} style={{ padding: "1.5rem", backgroundColor: "#F2ECE1", borderRadius: "8px", border: "1px solid #E5DEC9" }}>
                {s.icon}
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: "1.6", color: "#4A4A4A", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Projects Section */}
        <section id="projects" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          <b style={{ display: "block", marginBottom: "0.5rem", color: "#8C6A38" }}>منتجاتنا ومشاريعنا</b>
          <p style={{ color: "#4A4A4A", marginBottom: "2rem" }}>خمسة مشاريع طُوّرت انطلاقًا من احتياج واقعي، بين الأتمتة الصناعية، البرمجيات، والحلول الزراعية.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {projects.map((project, index) => (
              <a 
                href={`#/${project.path}`} 
                key={index} 
                className="project-card"
                style={{ 
                  display: "flex", 
                  gap: "1.5rem", 
                  backgroundColor: "#F2ECE1", 
                  padding: "1.5rem", 
                  borderRadius: "8px", 
                  border: "1px solid #E5DEC9", 
                  textDecoration: "none", 
                  color: "inherit",
                  alignItems: "center"
                }}
              >
                <img src={project.image} alt={project.alt} style={{ width: "160px", height: "120px", objectFit: "cover", borderRadius: "6px" }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{project.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#4A4A4A", margin: "0 0 0.5rem 0", lineHeight: "1.5" }}>{project.description}</p>
                  <span style={{ fontSize: "0.8rem", color: "#8C6A38", fontWeight: "bold" }}>{project.note} · التفاصيل</span>
                </div>
                <ChevronLeft size={20} style={{ minWidth: "20px" }} />
              </a>
            ))}
          </div>
        </section>

        {/* 7. Achievements */}
        <section id="achievements" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          <div className="responsive-split" style={{ display: "flex", gap: "3rem", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold", lineHeight: "1.2", margin: 0 }}>
                <em style={{ fontStyle: "normal", color: "#8C6A38" }}>إنجازاتنا</em>
              </h2>
            </div>
            <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column" }}>
              <article style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>براءة اختراع محلية</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>الحصول على براءة اختراع لجهاز حاضنة البيض الذكية.</p>
              </article>
              <article style={{ borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>مشاركات ومعارض</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>High-tech 2024، serfiks 2024، ومعرض دمشق الدولي 2025.</p>
              </article>
              <article style={{ borderBottom: "1px solid #1A1A1A", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>مسابقات ريادية</h3>
                <p style={{ fontSize: "0.95rem", color: "#4A4A4A", margin: 0, lineHeight: "1.6" }}>الوصول إلى المراحل النهائية في فرصة 2024 وScale Up 2025.</p>
              </article>
            </div>
          </div>
        </section>

       

        {/* 9. Team */}
<section id="team" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
  {/* تكبير عنوان فريق العمل */}
  <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "2rem", color: "#8C6A38" }}>
    فريق العمل
  </h2>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
    
    {/* بطاقة الشخص الأول */}
    <article style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <img 
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/SPhoBveBPajwKozG.jpg" 
        alt="نعمان داود" 
        style={{ width: "100%", maxWidth: "220px", borderRadius: "8px", height: "240px", objectFit: "cover" }} 
      />
      <div style={{ width: "100%", maxWidth: "220px" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "0.75rem", marginBottom: "0.25rem" }}>نعمان داود</h3>
        <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>المدير التنفيذي</p>
      </div>
    </article>

    {/* بطاقة الشخص الثاني */}
    <article style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <img 
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/PpqEzUuVVnOmyYkm.jpg" 
        alt="همام الشيخ" 
        style={{ width: "100%", maxWidth: "220px", borderRadius: "8px", height: "240px", objectFit: "cover" }} 
      />
      <div style={{ width: "100%", maxWidth: "220px" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "0.75rem", marginBottom: "0.25rem" }}>همام الشيخ</h3>
        <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>مسؤول العلاقات العامة</p>
      </div>
    </article>

  </div>
</section>

{/* 10. Contact */}
<section id="contact" style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
  <div className="responsive-split" style={{ display: "flex", gap: "3rem", justifyContent: "space-between", flexWrap: "wrap" }}>
    
    {/* قسم نموذج التواصل */}
    <div style={{ flex: "1 1 350px" }}>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold", lineHeight: "1.2", margin: "0 0 1rem 0" }}>
        <em style={{ fontStyle: "normal", color: "#8C6A38" }}>تواصل معنا</em>
      </h2>
      <p style={{ color: "#4A4A4A", margin: "0 0 1.5rem 0" }}>للتواصل حول حلول الأتمتة والبرمجيات والذكاء الاصطناعي.</p>
      
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "100%" }}>
        <input 
          type="text" 
          placeholder="الاسم الكامل" 
          dir="rtl"
          style={{ padding: "0.75rem", border: "1px solid #1A1A1A", borderRadius: "4px", backgroundColor: "#FAF7F2" }} 
          required 
        />
        <input 
          type="email" 
          placeholder="البريد الإلكتروني" 
          dir="rtl"
          style={{ padding: "0.75rem", border: "1px solid #1A1A1A", borderRadius: "4px", backgroundColor: "#FAF7F2" }} 
          required 
        />
        <textarea 
          placeholder="رسالتك أو طلب الاستشارة..." 
          rows={3} 
          dir="rtl"
          style={{ padding: "0.75rem", border: "1px solid #1A1A1A", borderRadius: "4px", backgroundColor: "#FAF7F2", resize: "vertical" }} 
          required 
        />
        <button 
          type="submit" 
          style={{ 
            padding: "0.75rem", 
            backgroundColor: "#1A1A1A", 
            color: "#FAF7F2", 
            border: "none", 
            borderRadius: "4px", 
            fontWeight: "bold", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "0.5rem", 
            cursor: "pointer" 
          }}
        >
          إرسال الرسالة <Send size={16} style={{ transform: "scaleX(-1)" }} />
        </button>
      </form>
    </div>

    {/* قسم معلومات الاتصال */}
    <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center", alignItems: "flex-start" }}>
      
      {/* رابط الواتساب */}
      <a 
        href="https://wa.me/963982401070" 
        target="_blank" 
        rel="noreferrer" 
        style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#1A1A1A", fontWeight: "bold", textDecoration: "none" }}
      >
        <Phone size={18} color="#8C6A38" />
        <span>تواصل عبر واتساب</span>
      </a>

      {/* رقم الهاتف - محدد بـ LTR ليظهر ترتيب الرقم بشكل صحيح */}
      <a 
        href="tel:+963982401070" 
        style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#1A1A1A", textDecoration: "none" }}
      >
        <Phone size={18} color="#8C6A38" />
        <span dir="ltr" style={{ unicodeBidi: "embed" }}>+963 982 401 070</span>
      </a>

      {/* البريد الإلكتروني */}
      <a 
        href="mailto:nomandawod96@gmail.com" 
        style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#1A1A1A", textDecoration: "none" }}
      >
        <Mail size={18} color="#8C6A38" />
        <span dir="ltr" style={{ unicodeBidi: "embed" }}>nomandawod96@gmail.com</span>
      </a>

      {/* العنوان */}
      <div style={{ color: "#666", fontSize: "0.9rem", paddingRight: "0.25rem" }}>
        <span>دمشق، سورية — طريق المطار</span>
      </div>

    </div>

  </div>
</section>
{/* زر التواصل العائم */}
<a
  href="#contact"
  aria-label="تواصل معنا"
  className="floating-contact-btn"
  style={{
    position: "fixed",
    bottom: "24px",
    left: "24px", // وضعه في اليسار ليتناسب مع الواجهات العربية (RTL)
    width: "56px",
    height: "56px",
    backgroundColor: "#1A1A1A",
    color: "#FAF7F2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
    zIndex: 9999,
    cursor: "pointer",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    animation: "floatPulse 2s infinite"
  }}
>
  <MessageCircle size={26} color="#FAF7F2" />
</a>
      </main>

      {/* 11. Footer */}
      <footer style={{ borderTop: "1px solid #E5DEC9", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1100px", margin: "0 auto", fontSize: "0.9rem", color: "#666" }}>
        <div>سادة التحكم <span style={{ fontSize: "0.8rem", color: "#888" }}>لحلول الأتمتة والذكاء الاصطناعي</span></div>
        <span>© 2026</span>
      </footer>
    </div>
  );
}