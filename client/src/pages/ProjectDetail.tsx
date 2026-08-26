/* Design reference: صفحات مشروع تحريرية مستلهمة من تسلسل العرض، بصور أصلية دون إطارات. */
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";
import "../project-detail.css";
import "../logo.css";
import "../section-separation.css";

type DetailData = {
  index: string;
  eyebrow: string;
  title: string;
  accentTitle: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroLabel: string;
  problemTitle: string;
  problem: string;
  problemPoints: string[];
  solutionTitle: string;
  solution: string;
  workflow: { number: string; title: string; copy: string }[];
  metric: string;
  metricLabel: string;
  targetTitle: string;
  audiences: string[];
  phase: string;
  theme: "incubator" | "automatex";
};

const incubator: DetailData = {
  index: "01",
  eyebrow: "SMART INCUBATION SYSTEM",
  title: "حاضنة وفرز البيض",
  accentTitle: "بالذكاء الاصطناعي",
  intro: "نظام محلي يجمع الحضانة المؤتمتة والرؤية الحاسوبية لتمييز البيض غير القابل للفقس مبكرًا، وتحسين الاستفادة من سعة الحاضنة.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/oofbpOUxlEdWYCZh.jpg",
  heroAlt: "المسار الميكانيكي والحساسات داخل الحاضنة الذكية",
  heroLabel: "PROTOTYPE / COMPUTER VISION",
  problemTitle: "المشكلة تبدأ من مساحة لا تنتج.",
  problem: "استمرار حجز شاغر في الحاضنة لبيضة ملقحة ولكن ميتة من الأيام الأولى للاحتضان يهدر جزءًا من الطاقة الإنتاجية المتاحة.",
  problemPoints: ["إدارة أدق لمساحة الحاضنة", "ظروف بيئية مناسبة للاحتضان", "فرز مبكر يعتمد على الرؤية الحاسوبية"],
  solutionTitle: "من الحضانة إلى قرار فرز مبكر.",
  solution: "يعتمد النظام على مسار ميكانيكي وحساسات ورؤية حاسوبية لدعم متابعة البيض ضمن بيئة حضانة منظمة، وصولًا إلى قرار يحرر السعة المستخدمة بصورة أكثر كفاءة.",
  workflow: [
    { number: "01", title: "تهيئة بيئة الحضانة", copy: "تنظيم الظروف اللازمة لاستقبال البيض الملقح ضمن الحاضنة." },
    { number: "02", title: "التقاط ومعالجة الصورة", copy: "استخدام الرؤية الحاسوبية لفحص البيض خلال مراحل الاحتضان الأولى." },
    { number: "03", title: "الفرز والاستفادة من السعة", copy: "تمييز الحالات غير المناسبة للفقس لدعم قرار تشغيلي أسرع." },
  ],
  metric: "25%",
  metricLabel: "هدف العرض لزيادة إنتاج صيصان الفقس بما لا يقل عن",
  targetTitle: "من يخدمه النظام؟",
  audiences: ["أصحاب المداجن الكبيرة والصغيرة", "الفلاحون", "طلاب الدراسات والبحث العملي"],
  phase: "براءة اختراع محلية · نموذج تطبيقي",
  theme: "incubator",
};

const automatex: DetailData = {
  index: "02",
  eyebrow: "AUTOMATION & TRACKING SYSTEM",
  title: "AutoMate",
  accentTitle: "X",
  intro: "نظام أتمتة ومراقبة لخطوط إنتاج معامل الألبسة، مصمم لتحويل متابعة القطعة الواحدة إلى بيانات تشغيلية قابلة للقراءة من المكتب أو عن بُعد.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/vxDTHSvgWFfQRiUO.jpg",
  heroAlt: "بيئة عمل في معمل ألبسة",
  heroLabel: "CLOTHING FACTORY / TRACKING",
  problemTitle: "عندما تكون البيانات خلف خط الإنتاج.",
  problem: "تواجه معامل الألبسة تحديات مرتبطة بنقص الكفاءة، وصعوبة تتبع الإنتاج، وعدم الدقة في التخطيط التشغيلي.",
  problemPoints: ["صعوبة معرفة موقع القطعة ضمن الخط", "متابعة يدوية متأخرة للإنتاج", "تخطيط أقل دقة للعمليات اليومية"],
  solutionTitle: "كل قطعة تترك أثرًا رقميًا.",
  solution: "يربط AutoMate X تتبع كل قطعة باستخدام QR مع لوحة تحكم وتطبيق هاتف وتحديثات آنية، لتصبح حركة الإنتاج مصدرًا لبيانات أوضح وقرارات أسرع.",
  workflow: [
    { number: "01", title: "تعريف القطعة", copy: "ربط كل قطعة بمعرّف QR يمكن قراءته أثناء تنقلها ضمن خط الإنتاج." },
    { number: "02", title: "تحديثات آنية", copy: "إظهار حركة الإنتاج في لوحة تحكم وتطبيق موبايل بواجهات مبسطة." },
    { number: "03", title: "تحليل وتخطيط", copy: "استخدام البيانات والتحليلات التنبؤية لدعم التخطيط ومتابعة الأداء." },
  ],
  metric: "QR",
  metricLabel: "معرّف تشغيلي لكل قطعة ضمن مسار الإنتاج",
  targetTitle: "قيمة عملية لخط الإنتاج",
  audiences: ["إدارة الإنتاج", "المتابعة التشغيلية عن بُعد", "فرق التخطيط والجودة"],
  phase: "نموذج أولي قيد الاختبار",
  theme: "automatex",
};

function DetailPage({ data }: { data: DetailData }) {
  return (
    <div className={`detail-page detail-${data.theme}`} dir="rtl">
      <header className="detail-nav">
        <a href="#/" className="detail-back"><ArrowLeft size={18} /> العودة إلى المشاريع</a>
        <a href="#/" className="detail-brand detail-logo" aria-label="سادة التحكم - الصفحة الرئيسية"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/nOdSyXACWGFuaZeb.png" alt="شعار سادة التحكم لحلول الأتمتة والذكاء الاصطناعي" /></a>
      </header>
      <main>
        <section className="detail-hero">
          <div className="detail-hero-copy"><p className="detail-eyebrow">{data.index} / {data.eyebrow}</p><h1>{data.title}<br /><em>{data.accentTitle}</em></h1><p>{data.intro}</p><span className="detail-phase">{data.phase}</span></div>
          <figure className="detail-hero-media"><img src={data.heroImage} alt={data.heroAlt} /><figcaption>{data.heroLabel}</figcaption></figure>
        </section>

        <section className="detail-problem detail-section"><div className="detail-section-label">01 / الحاجة</div><div><h2>{data.problemTitle}</h2><p>{data.problem}</p></div><ul>{data.problemPoints.map((point) => <li key={point}><Check size={17} /> {point}</li>)}</ul></section>

        <section className="detail-solution detail-section"><div className="detail-section-label">02 / الحل</div><div className="solution-copy"><h2>{data.solutionTitle}</h2><p>{data.solution}</p></div><div className="workflow">{data.workflow.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>

        <section className="detail-impact"><div className="impact-stat">{data.metric}</div><div><p className="detail-section-label">03 / الأثر</p><h2>{data.metricLabel}</h2><p>المعلومات المعروضة هنا مستندة إلى العرض التقديمي للمشروع، وتوضح اتجاه النظام وهدفه التشغيلي.</p></div></section>

        <section className="detail-target detail-section"><div className="detail-section-label">04 / الاستخدام</div><div><h2>{data.targetTitle}</h2><div className="target-list">{data.audiences.map((audience, index) => <span key={audience}><b>0{index + 1}</b>{audience}</span>)}</div></div></section>

        <section className="detail-contact"><div><p className="detail-eyebrow">LET'S DISCUSS THE PROJECT</p><h2>هل تريد معرفة<br />المزيد عن <em>{data.title}؟</em></h2></div><div className="detail-contact-links"><a href="https://wa.me/963982401070" target="_blank" rel="noreferrer"><Phone size={17} /> تواصل عبر واتساب</a><a href="mailto:nomandawod96@gmail.com"><Mail size={17} /> راسلنا بالبريد</a></div></section>
      </main>
      <footer className="detail-footer"><span>سادة التحكم لحلول الأتمتة والذكاء الاصطناعي</span><a href="#/">العودة للصفحة الرئيسية</a></footer>
    </div>
  );
}

export function SmartIncubatorDetail() { return <DetailPage data={incubator} />; }
export function AutoMateXDetail() { return <DetailPage data={automatex} />; }
