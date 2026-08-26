/**
 * Design reference: العرض التقديمي المرفق — خلفية بيضاء، إطارات سوداء، زوايا هندسية، وصور الشركة فقط.
 */
import { ArrowLeft, ArrowUpLeft, ChevronLeft, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import "../polish.css";
import "../logo.css";
import "../section-separation.css";

const projects = [
  {
    number: "01",
    title: "حاضنة وفرز البيض بالذكاء الاصطناعي",
    description: "نظام يصنّف البيض إلى ملقّح وغير ملقّح في اليوم الثالث من الاحتضان، بالاعتماد على الذكاء الاصطناعي والرؤية الحاسوبية.",
    note: "براءة اختراع محلية · زيادة إنتاجية صيصان الفقس حتى 30%",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/HbpOYOxJysjpnCXR.jpg",
    alt: "آلية حضن وفرز البيض المطورة من سادة التحكم",
    tone: "wood",
    path: "projects/smart-incubator",
  },
  {
    number: "02",
    title: "AutoMate X",
    description: "نظام أتمتة ومراقبة لخطوط الإنتاج في معامل الألبسة، يتيح متابعة الإنتاج من المكتب وعن بُعد.",
    note: "أتمتة · مراقبة · إدارة إنتاج",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/MDfzByinmkrhsRps.jpg",
    alt: "وحدة رؤية ومراقبة مستخدمة ضمن نظام AutoMate X",
    tone: "soft",
    path: "projects/automatex",
  },
  {
    number: "03",
    title: "تطبيق مدرسة عبد القادر بدران الشرعية",
    description: "نظام إدارة شامل يرقمن تسجيل الطلاب، وينظم عمل الإدارة، ويمنح الأهل وسيلة واضحة لمتابعة الطلاب.",
    note: "تطبيق جوال · إدارة مدرسية · متابعة أولياء الأمور",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/nnemqAteitXKqRUg.jpg",
    alt: "واجهات تطبيق مدرسة عبد القادر بدران الشرعية",
    tone: "green",
    path: "projects/school-app",
  },
  {
    number: "04",
    title: "مكنة CNC لحفر الخشب",
    description: "تصميم وتصنيع مكنة لحفر الخشب والنقش على الأبواب الخشبية بخبرات محلية، مع خدمات صيانة سريعة.",
    note: "تصميم محلي · تصنيع · صيانة",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/DqiAepxOrdKPAgHj.png",
    alt: "تصميم مكنة CNC لحفر الخشب من مشاريع سادة التحكم",
    tone: "technical",
    path: "projects/cnc-router",
  },
  {
    number: "05",
    title: "أدوات زراعية لصواني الشتل",
    description: "أدوات عملية لفنيي الزراعة وأصحاب المشاتل لتسهيل زراعة صواني الشتل وإدخال أساليب حديثة للمشاتل البلاستيكية.",
    note: "زراعة ذكية · مشاتل · كلفة تشغيل منخفضة",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/WEATcOkfgBRxRptC.jpg",
    alt: "صينية شتل زراعية مطورة ضمن مشاريع الشركة",
    tone: "sand",
    path: "projects/seedling-tools",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ppt-site" dir="rtl">
      <header className="topbar">
        <a href="#home" className="wordmark logo-wordmark" aria-label="سادة التحكم - الصفحة الرئيسية" onClick={closeMenu}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/YhDNnPkTUAoVIycs.png" alt="شعار سادة التحكم لحلول الأتمتة والذكاء الاصطناعي" />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>عن الشركة</a>
          <a href="#projects" onClick={closeMenu}>مشاريعنا</a>
          <a href="#achievements" onClick={closeMenu}>إنجازاتنا</a>
          <a href="#team" onClick={closeMenu}>فريقنا</a>
          <a href="#vision" onClick={closeMenu}>رؤيتنا</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>تواصل معنا <ArrowUpLeft size={15} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="cover slide-frame">
          <div className="corner corner-top" />
          <div className="cover-copy">
            <h1 className="cover-brand-title"><span className="sr-only">سادة التحكم لحلول الأتمتة والذكاء الاصطناعي</span><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/YhDNnPkTUAoVIycs.png" alt="شعار سادة التحكم لحلول الأتمتة والذكاء الاصطناعي" /></h1>
            <p>شركة ناشئة متخصصة في حلول الأتمتة وهندسة الحواسيب، نطوّر أدوات واقعية للقطاعات التي تحتاج تقنية تصنع فرقًا يمكن قياسه.</p>
            <a href="#projects" className="line-button">استكشف مشاريعنا <ArrowLeft size={17} /></a>
          </div>
          <div className="cover-visuals">
            <figure className="cover-image hero-product">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/zExURtowCysrXNwS.jpg" alt="تصميم حاضنة بيض مؤتمتة من مشاريع سادة التحكم" />
              <figcaption>الحاضنة الذكية</figcaption>
            </figure>
            <figure className="cover-image hero-sensor">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/vtnSNLStfCLsEEGw.jpg" alt="حساس رؤية حاسوبية ضمن نظام فرز البيض" />
              <figcaption>الرؤية الحاسوبية</figcaption>
            </figure>
            <figure className="cover-image hero-session">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/qBWbdZxxrUabPyGq.jpg" alt="اجتماع لفريق سادة التحكم" />
              <figcaption>فريق العمل</figcaption>
            </figure>
          </div>
          <div className="cover-grid" aria-hidden="true"><span /><span /><span /></div>
          <div className="cover-index">01 <i /> 05</div>
        </section>

        <section className="about-section slide-frame" id="about">
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
            <p>خمسة مشاريع طُوّرت انطلاقًا من احتياج واقعي، بين الأتمتة الصناعية، البرمجيات، والحلول الزراعية.</p>
          </div>
          <div className="projects-stack">
            {projects.map((project) => {
              const content = <>
                <div className="project-number">{project.number}</div>
                <div className="project-info">
                  <div className="project-title-band"><h3>{project.title}</h3></div>
                  <p>{project.description}</p>
                  <span className="project-note">{project.note}{project.path ? " · التفاصيل" : ""}</span>
                </div>
                <div className="project-visual">
                  {project.image ? <img src={project.image} alt={project.alt} /> : <div className="cnc-visual" aria-label="مشروع مكنة CNC"><span>CNC</span><i /><b>WOOD ROUTER</b></div>}
                </div>
                <ChevronLeft className="project-arrow" size={24} strokeWidth={1.5} />
              </>;

              return project.path ? <a href={`#/${project.path}`} className={`project-row project-link ${project.tone}`} key={project.number} aria-label={`عرض تفاصيل ${project.title}`}>{content}</a> : <article className={`project-row ${project.tone}`} key={project.number}>{content}</article>;
            })}
          </div>
        </section>

        <section className="achievements-section slide-frame" id="achievements">
          <div className="achievements-intro"><h2>إنجازات<br /><em>سادة التحكم.</em></h2></div>
          <div className="achievements-list">
            <article><span>01</span><h3>براءة اختراع محلية</h3><p>الحصول على براءة اختراع لجهاز حاضنة البيض الذكية.</p></article>
            <article><span>02</span><h3>مشاركات ومعارض</h3><p>High-tech 2024، serfiks 2024، ومعرض دمشق الدولي 2025.</p></article>
            <article><span>03</span><h3>مسابقات ريادية</h3><p>الوصول إلى المراحل النهائية في فرصة 2024 وScale Up 2025.</p></article>
          </div>
        </section>

        <section className="vision-section slide-frame" id="vision">
          <div className="vision-title"><h2>تقنية محلية<br />لمستقبل <em>منتِج.</em></h2></div>
          <div className="vision-copy"><p>استخدام التقنيات الحديثة في الصناعات السورية والاستفادة من الخبرات المحلية للنهوض بمستوى الصناعة السورية.</p><p>نطمح إلى انتقال سورية من بلد مستهلك للتقنيات الحديثة إلى بلد منتج لأحدث التقنيات والأدوات التي تعتمد بشكل أساسي على الذكاء الاصطناعي، مع تدريب الشباب الناشئ عقليًا ومهاريًا على مواكبة التطورات.</p></div>
          <div className="vision-lines" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="team-section slide-frame" id="team">
          <div className="team-head"><h2>خبرات محلية<br />تعمل <em>كفريق واحد.</em></h2></div>
          <div className="team-intro">نؤمن بأن أفضل الحلول تبدأ من فريق يفهم التقنية ويفهم الواقع الذي سيعمل فيه النظام.</div>
          <div className="team-grid">
            <article className="team-member"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/SPhoBveBPajwKozG.jpg" alt="نعمان داود" /><div><h3>نعمان داود</h3><p>المدير التنفيذي</p></div></article>
            <article className="team-member"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/PpqEzUuVVnOmyYkm.jpg" alt="همام الشيخ" /><div><h3>همام الشيخ</h3><p>مسؤول العلاقات العامة</p></div></article>
          </div>
        </section>

        <section className="contact-section slide-frame" id="contact">
          <div className="contact-ink"><h2>تواصل مع<br /><em>سادة التحكم.</em></h2><p>للتواصل حول حلول الأتمتة والبرمجيات والذكاء الاصطناعي.</p><a className="contact-action" href="mailto:nomandawod96@gmail.com">راسلنا الآن <ArrowLeft size={17} /></a></div>
          <div className="contact-details"><a className="whatsapp-link" href="https://wa.me/963982401070" target="_blank" rel="noreferrer"><Phone size={17} /> تواصل عبر واتساب</a><a href="tel:+963982401070"><Phone size={17} /> +963 982 401 070</a><a href="mailto:nomandawod96@gmail.com"><Mail size={17} /> nomandawod96@gmail.com</a><span>دمشق، سورية — طريق المطار</span></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-name">سادة التحكم <span>لحلول الأتمتة والذكاء الاصطناعي</span></div><span>© 2026</span></footer>
    </div>
  );
}
