/**
 * Design philosophy: مختبر الحقول الذكية — تخطيط تحريري عربي غير متماثل، كحلي موثوق، أخضر طحلبي عملي، ولمسات ذهبية تشغيلية.
 */
import {
  ArrowLeft,
  ArrowUpLeft,
  ChevronDown,
  Cpu,
  Eye,
  Factory,
  Leaf,
  Menu,
  Network,
  ScanLine,
  Settings2,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const asset = (path: string) => path;

const services = [
  {
    index: "01",
    icon: Cpu,
    title: "برمجيات ومنصات مخصصة",
    text: "نصمم ونطوّر مواقع الويب وتطبيقات الجوال والأنظمة التي تختصر التعقيد وتمنح فريقك رؤية أدق.",
  },
  {
    index: "02",
    icon: Factory,
    title: "حلول أتمتة موثوقة",
    text: "نحوّل العمليات المتكررة إلى أنظمة أكثر اتساقًا، مع مراقبة وتحكم قابلين للقياس.",
  },
  {
    index: "03",
    icon: Leaf,
    title: "حلول زراعية ذكية",
    text: "نربط الحساسات والبيانات بالقرار، لتصبح الموارد الزراعية أكثر كفاءة واستدامة.",
  },
  {
    index: "04",
    icon: Eye,
    title: "رؤية حاسوبية وذكاء اصطناعي",
    text: "نبني أنظمة ترى الأنماط وتساعدك على اتخاذ القرار في الوقت المناسب.",
  },
];

const steps = [
  ["01", "نستمع", "نبدأ من الواقع الفعلي للمشكلة، لا من حل جاهز."],
  ["02", "نبني", "نحوّل الفكرة إلى نموذج أولي يمكن اختباره مبكرًا."],
  ["03", "نقيس", "نراقب النتيجة ونحسّن النظام حتى يصبح أثره واضحًا."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="سادة التحكم - الصفحة الرئيسية" onClick={closeMenu}>
          <span className="brand-mark"><img src={asset("/manus-storage/asyad-control-mark_b1e340c2.png")} alt="" /></span>
          <span><strong>سادة</strong><small>التحكم</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#about" onClick={closeMenu}>عن الشركة</a>
          <a href="#services" onClick={closeMenu}>مجالاتنا</a>
          <a href="#project" onClick={closeMenu}>مشروع مميز</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>لنتحدث <ArrowUpLeft size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-text">
            <p className="eyebrow"><span className="eyebrow-line" /> شركة سورية للحلول الذكية</p>
            <h1>نبني أنظمة<br /><em>ترى، تقرر،</em><br />وتعمل.</h1>
            <p className="hero-lede">نحوّل البرمجيات والأتمتة والذكاء الاصطناعي إلى أدوات عملية تمنح أعمالك قدرة أكبر على الفهم والتحكم والنمو.</p>
            <a className="button button-light" href="#services">اكتشف مجالاتنا <ArrowLeft size={18} /></a>
          </div>
          <div className="hero-visual">
            <img src={asset("/manus-storage/asyad-hero_bf5ec291.jpg")} alt="بيئة زراعية ذكية متصلة بأنظمة تحكم" />
            <div className="hero-caption"><span>SC / 2026</span><span>SMART SYSTEMS</span></div>
            <div className="hero-pin"><span className="pin-dot" /><span>من الفكرة<br />إلى الأثر</span></div>
          </div>
          <div className="hero-index">01 <span /> 04</div>
          <div className="scroll-cue"><ChevronDown size={17} /> مرّر للاستكشاف</div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-label"><span>02</span><span className="label-line" /> من نحن</div>
          <div className="intro-copy">
            <h2>التقنية الأفضل هي التي <span>تخدم الواقع.</span></h2>
            <p>في سادة التحكم، لا نطارد التعقيد من أجل التعقيد. نبدأ من احتياج حقيقي، ثم نستخدم الأدوات المناسبة — من البرمجيات والتطبيقات إلى الحساسات والرؤية الحاسوبية — لبناء حل يمكن فهمه وتشغيله وتطويره.</p>
            <div className="intro-note"><Sparkles size={18} /><span>نمزج عقلية المهندس بفضول المبتكر.</span></div>
          </div>
          <div className="intro-aside"><strong>01</strong><span>رؤية<br />عملية</span><p>حلول مصممة لتعمل خارج الشاشة، في المصنع والحقل والمختبر.</p></div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="services-head"><div className="section-label"><span>03</span><span className="label-line" /> ماذا نفعل</div><h2>أربع طرق<br /><span>لصناعة فرق.</span></h2><p>مجالات متقاطعة، يجمعها هدف واحد: تحويل البيانات والأفكار إلى قرارات وأنظمة تعمل.</p></div>
          <div className="services-grid">
            {services.map(({ index, icon: Icon, title, text }) => <article className="service-card" key={index}><div className="service-top"><span>{index}</span><Icon size={24} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpLeft className="card-arrow" size={21} /></article>)}
          </div>
        </section>

        <section className="project-section section-pad" id="project">
          <div className="project-image"><img src={asset("/manus-storage/sada-control-egg-sorter_76a1493a.jpg")} alt="آلية حضن وفرز البيض المطورة من سادة التحكم" /><span className="image-tag">CASE / 001</span></div>
          <div className="project-copy"><div className="section-label"><span>04</span><span className="label-line" /> من مشاريعنا</div><h2>حين يرى النظام<br /><span>ما لا تراه العين.</span></h2><p>نظام حضن وفرز البيض بالذكاء الاصطناعي، حاصل على براءة اختراع سورية. مشروع يجمع الميكاترونيك، الرؤية الحاسوبية، والتحكم الآلي في منظومة واحدة.</p><a className="text-link" href="#contact">تعرّف على إمكانات التعاون <ArrowLeft size={18} /></a><div className="project-stat"><strong>AI</strong><span>رؤية حاسوبية<br />في خدمة الإنتاج</span></div></div>
        </section>

        <section className="method-section section-pad"><div className="method-heading"><div className="section-label"><span>05</span><span className="label-line" /> كيف نعمل</div><h2>من السؤال<br /><span>إلى النظام.</span></h2></div><div className="steps-list">{steps.map(([num, title, text]) => <div className="step" key={num}><span className="step-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpLeft size={20} /></div>)}</div></section>

        <section className="contact-section" id="contact"><div className="contact-image"><img src={asset("/manus-storage/sada-control-vision-sensor_d02cd2c2.jpg")} alt="حساسات ورؤية حاسوبية في نظام فرز البيض" /></div><div className="contact-copy"><div className="section-label light-label"><span>06</span><span className="label-line" /> لنبنِ القادم</div><h2>لديك فكرة<br /><em>تستحق أن تعمل؟</em></h2><p>أخبرنا عن التحدي الذي تريد تحويله إلى حل. سنبدأ من حيث أنت.</p><a className="button button-green" href="mailto:nomandawod96@gmail.com">تواصل معنا <ArrowLeft size={18} /></a><div className="contact-meta"><a href="mailto:nomandawod96@gmail.com">nomandawod96@gmail.com</a><a href="tel:+963982401070">+963 982 401 070 — دمشق، سورية</a></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark"><img src={asset("/manus-storage/asyad-control-mark_b1e340c2.png")} alt="" /></span><span><strong>سادة</strong><small>التحكم</small></span></a><p>برمجيات. أتمتة. ذكاء اصطناعي.</p><span>© 2026 سادة التحكم</span></footer>
    </div>
  );
}
