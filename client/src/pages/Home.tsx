/**
 * Design reference: العرض التقديمي المرفق — خلفية بيضاء، إطارات سوداء، زوايا هندسية، وصور الشركة فقط.
 */
import { ArrowLeft, ArrowUpLeft, ChevronLeft, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "حاضنة وفرز البيض بالذكاء الاصطناعي",
    description: "نظام يصنّف البيض إلى ملقّح وغير ملقّح في اليوم الثالث من الاحتضان، بالاعتماد على الذكاء الاصطناعي والرؤية الحاسوبية.",
    note: "براءة اختراع محلية · زيادة إنتاجية صيصان الفقس حتى 30%",
    image: "/manus-storage/sada-egg-sorter_b552596d.jpg",
    alt: "آلية حضن وفرز البيض المطورة من سادة التحكم",
    tone: "wood",
  },
  {
    number: "02",
    title: "AutoMate X",
    description: "نظام أتمتة ومراقبة لخطوط الإنتاج في معامل الألبسة، يتيح متابعة الإنتاج من المكتب وعن بُعد.",
    note: "أتمتة · مراقبة · إدارة إنتاج",
    image: "/manus-storage/sada-automatex_9ad4dae3.jpg",
    alt: "وحدة رؤية ومراقبة مستخدمة ضمن نظام AutoMate X",
    tone: "soft",
  },
  {
    number: "03",
    title: "تطبيق مدرسة عبد القادر بدران الشرعية",
    description: "نظام إدارة شامل يرقمن تسجيل الطلاب، وينظم عمل الإدارة، ويمنح الأهل وسيلة واضحة لمتابعة الطلاب.",
    note: "تطبيق جوال · إدارة مدرسية · متابعة أولياء الأمور",
    image: "/manus-storage/sada-school-app_750b0d7e.jpg",
    alt: "واجهات تطبيق مدرسة عبد القادر بدران الشرعية",
    tone: "green",
  },
  {
    number: "04",
    title: "مكنة CNC لحفر الخشب",
    description: "تصميم وتصنيع مكنة لحفر الخشب والنقش على الأبواب الخشبية بخبرات محلية، مع خدمات صيانة سريعة.",
    note: "تصميم محلي · تصنيع · صيانة",
    image: null,
    alt: "",
    tone: "technical",
  },
  {
    number: "05",
    title: "أدوات زراعية لصواني الشتل",
    description: "أدوات عملية لفنيي الزراعة وأصحاب المشاتل لتسهيل زراعة صواني الشتل وإدخال أساليب حديثة للمشاتل البلاستيكية.",
    note: "زراعة ذكية · مشاتل · كلفة تشغيل منخفضة",
    image: "/manus-storage/sada-seedling-tray_a80fc64c.jpg",
    alt: "صينية شتل زراعية مطورة ضمن مشاريع الشركة",
    tone: "sand",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ppt-site" dir="rtl">
      <header className="topbar">
        <a href="#home" className="wordmark" aria-label="سادة التحكم - الصفحة الرئيسية" onClick={closeMenu}>
          <span>سادة التحكم</span>
          <small>لحلول الأتمتة والذكاء الاصطناعي</small>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>عن الشركة</a>
          <a href="#projects" onClick={closeMenu}>مشاريعنا</a>
          <a href="#vision" onClick={closeMenu}>رؤيتنا</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>تواصل معنا <ArrowUpLeft size={15} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="cover slide-frame">
          <div className="corner corner-top" />
          <div className="cover-copy">
            <p className="mono-label">01 / COMPANY PROFILE</p>
            <h1>سادة التحكم<br /><span>لحلول الأتمتة</span><br />والذكاء الاصطناعي</h1>
            <p>شركة ناشئة متخصصة في حلول الأتمتة وهندسة الحواسيب، نطوّر أدوات واقعية للقطاعات التي تحتاج تقنية تصنع فرقًا يمكن قياسه.</p>
            <a href="#projects" className="line-button">استكشف مشاريعنا <ArrowLeft size={17} /></a>
          </div>
          <figure className="cover-image image-frame">
            <img src="/manus-storage/sada-hero-incubator_506236b7.jpg" alt="تصميم حاضنة بيض مؤتمتة من مشاريع سادة التحكم" />
            <figcaption>SMART INCUBATION SYSTEM / 01</figcaption>
          </figure>
          <div className="cover-grid" aria-hidden="true"><span /><span /><span /></div>
          <div className="cover-index">01 <i /> 05</div>
        </section>

        <section className="about-section slide-frame" id="about">
          <div className="section-kicker"><span>02</span><i /> مجالات عملنا</div>
          <div className="about-grid">
            <h2>حلول تبني<br /><em>أثرًا حقيقيًا.</em></h2>
            <div className="about-list">
              <p><b>01</b> تصميم وتنفيذ أنظمة ومكنات مؤتمتة.</p>
              <p><b>02</b> برمجة تطبيقات الموبايل والحاسوب.</p>
              <p><b>03</b> الاستشارات التقنية في مجال الأتمتة.</p>
            </div>
          </div>
          <div className="black-corner" />
        </section>

        <section className="projects-section" id="projects">
          <div className="section-head slide-frame">
            <div className="section-kicker"><span>03</span><i /> منتجاتنا ومشاريعنا</div>
            <p>خمسة مشاريع طُوّرت انطلاقًا من احتياج واقعي، بين الأتمتة الصناعية، البرمجيات، والحلول الزراعية.</p>
          </div>
          <div className="projects-stack">
            {projects.map((project) => (
              <article className={`project-row ${project.tone}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-note">{project.note}</span>
                </div>
                <div className="project-visual">
                  {project.image ? (
                    <img src={project.image} alt={project.alt} />
                  ) : (
                    <div className="cnc-visual" aria-label="مشروع مكنة CNC">
                      <span>CNC</span><i /><b>WOOD ROUTER</b>
                    </div>
                  )}
                </div>
                <ChevronLeft className="project-arrow" size={24} strokeWidth={1.5} />
              </article>
            ))}
          </div>
        </section>

        <section className="vision-section slide-frame" id="vision">
          <div className="vision-title"><div className="section-kicker"><span>04</span><i /> رؤيتنا</div><h2>تقنية محلية<br />لمستقبل <em>منتِج.</em></h2></div>
          <div className="vision-copy"><p>استخدام التقنيات الحديثة في الصناعات السورية والاستفادة من الخبرات المحلية للنهوض بمستوى الصناعة السورية.</p><p>نطمح إلى انتقال سورية من بلد مستهلك للتقنيات الحديثة إلى بلد منتج لأحدث التقنيات والأدوات التي تعتمد بشكل أساسي على الذكاء الاصطناعي، مع تدريب الشباب الناشئ عقليًا ومهاريًا على مواكبة التطورات.</p></div>
          <div className="vision-lines" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="contact-section slide-frame" id="contact">
          <div className="contact-ink"><p className="mono-label">05 / LET'S TALK</p><h2>لنحوّل الفكرة<br />إلى <em>نظام يعمل.</em></h2><p>نرحب بمناقشة احتياجاتك في الأتمتة والبرمجيات والذكاء الاصطناعي.</p><a className="contact-action" href="mailto:nomandawod96@gmail.com">راسلنا الآن <ArrowLeft size={17} /></a></div>
          <div className="contact-details"><a href="tel:+963982401070"><Phone size={17} /> +963 982 401 070</a><a href="mailto:nomandawod96@gmail.com"><Mail size={17} /> nomandawod96@gmail.com</a><span>دمشق، سورية — طريق المطار</span></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-name">سادة التحكم <span>لحلول الأتمتة والذكاء الاصطناعي</span></div><span>© 2026</span></footer>
    </div>
  );
}
