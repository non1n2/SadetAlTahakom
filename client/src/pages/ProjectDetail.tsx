/* Design reference: صفحات مشروع تحريرية مستلهمة من تسلسل العرض، بصور أصلية دون إطارات. */
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";
import "../project-detail.css";
import "../logo.css";
import "../section-separation.css";
import "../project-extra.css";

type DetailData = {
  index: string;
  eyebrow: string;
  title: string;
  accentTitle: string;
  intro: string;
  heroImage: string | null;
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
  theme: "incubator" | "automatex" | "school" | "cnc" | "seedling";
};

const incubator: DetailData = {
  index: "01",
  eyebrow: "نظام حضن وفرز ذكي",
  title: "حاضنة وفرز البيض",
  accentTitle: "بالذكاء الاصطناعي",
  intro: "نظام محلي يجمع الحضانة المؤتمتة والرؤية الحاسوبية لتمييز البيض غير القابل للفقس مبكرًا، وتحسين الاستفادة من سعة الحاضنة.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/oofbpOUxlEdWYCZh.jpg",
  heroAlt: "المسار الميكانيكي والحساسات داخل الحاضنة الذكية",
  heroLabel: "نموذج أولي · رؤية حاسوبية",
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
  eyebrow: "نظام أتمتة ومتابعة",
  title: "AutoMate",
  accentTitle: "X",
  intro: "نظام أتمتة ومراقبة لخطوط إنتاج معامل الألبسة، مصمم لتحويل متابعة القطعة الواحدة إلى بيانات تشغيلية قابلة للقراءة من المكتب أو عن بُعد.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/vxDTHSvgWFfQRiUO.jpg",
  heroAlt: "بيئة عمل في معمل ألبسة",
  heroLabel: "معمل ألبسة · متابعة الإنتاج",
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

const school: DetailData = {
  index: "03",
  eyebrow: "نظام إدارة مدرسي",
  title: "تطبيق مدرسة عبد القادر بدران",
  accentTitle: "الشرعية",
  intro: "نظام إدارة شامل يربط تسجيل الطلاب وتنظيم العمل الإداري ومتابعة الأهل ضمن تجربة رقمية أبسط للمدرسة.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/nnemqAteitXKqRUg.jpg",
  heroAlt: "واجهات تطبيق مدرسة عبد القادر بدران الشرعية",
  heroLabel: "إدارة مدرسية · تطبيق موبايل",
  problemTitle: "الإدارة المدرسية تحتاج مسارًا موحدًا.",
  problem: "تعدد المعاملات الورقية بين مكاتب المدرسة وغياب قناة واضحة لمتابعة الأهل يرفعان عبء العمل اليومي ويؤخران الوصول إلى المعلومة.",
  problemPoints: ["تسجيل طلاب يحتاج تنظيمًا أوضح", "معاملات ورقية بين مكاتب الإدارة", "متابعة الأهل لطلابهم تحتاج قناة مباشرة"],
  solutionTitle: "نظام واحد لثلاثة مسارات رئيسية.",
  solution: "يوفر التطبيق تسجيل الطلاب إلكترونيًا من قبل الإدارة، وينظم عمل الإداريين، ويمنح الأهل وسيلة لمراقبة الطلاب ومتابعتهم.",
  workflow: [
    { number: "01", title: "تسجيل إلكتروني", copy: "تنظيم تسجيل الطلاب عبر الإدارة ضمن مسار رقمي واضح." },
    { number: "02", title: "إدارة منظمة", copy: "استبدال المعاملات الورقية المتنقلة بين مكاتب المدرسة." },
    { number: "03", title: "متابعة الأهل", copy: "توفير تطبيق يساعد أولياء الأمور على مراقبة الطلاب." },
  ],
  metric: "3",
  metricLabel: "مسارات إدارية وتعليمية موحّدة في نظام واحد",
  targetTitle: "من يستخدم التطبيق؟",
  audiences: ["إدارة المدرسة", "الإداريون", "أولياء الأمور"],
  phase: "نظام إدارة مدرسي",
  theme: "school",
};

const cnc: DetailData = {
  index: "04",
  eyebrow: "تصميم وتصنيع محلي",
  title: "مكنة CNC",
  accentTitle: "لحفر الخشب",
  intro: "مشروع تصميم وتصنيع مكنة لحفر الخشب والنقش على الأبواب الخشبية، بخبرات محلية وخدمة صيانة سريعة.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/DqiAepxOrdKPAgHj.png",
  heroAlt: "تصميم مكنة CNC لحفر الخشب من مشاريع سادة التحكم",
  heroLabel: "مكنة لحفر الخشب",
  problemTitle: "أداة إنتاج محلية لورشة الخشب.",
  problem: "يركز المشروع على تقديم مكنة مخصصة لحفر الخشب والنقش على الأبواب الخشبية، مع تصميم وتصنيع بخبرات محلية وخدمة صيانة داعمة.",
  problemPoints: ["حفر الخشب والنقش على الأبواب", "تصميم وتصنيع بخبرات محلية", "خدمات صيانة سريعة"],
  solutionTitle: "من التصميم إلى خدمة ما بعد التنفيذ.",
  solution: "تجمع المكنة بين التصميم المحلي والتصنيع وخدمة الصيانة، لتكون جزءًا عمليًا من أدوات العمل في قطاع الأخشاب.",
  workflow: [
    { number: "01", title: "تصميم محلي", copy: "تطوير تصميم المكنة اعتمادًا على خبرات محلية." },
    { number: "02", title: "تصنيع المكنة", copy: "تنفيذ مكنة لحفر الخشب والنقش على الأبواب." },
    { number: "03", title: "صيانة ودعم", copy: "تقديم خدمات صيانة بسرعة ومهارة حسب العرض التعريفي." },
  ],
  metric: "محلي",
  metricLabel: "تصميم وتصنيع مكنة بخبرات محلية",
  targetTitle: "المجال التطبيقي",
  audiences: ["ورش الخشب", "صنّاع الأبواب الخشبية", "أعمال الحفر والنقش"],
  phase: "تصميم وتصنيع محلي",
  theme: "cnc",
};

const seedling: DetailData = {
  index: "05",
  eyebrow: "أدوات للمشاتل",
  title: "أدوات زراعية",
  accentTitle: "لصواني الشتل",
  intro: "أدوات عملية لفنيي الزراعة وأصحاب المشاتل لتسهيل زراعة صواني الشتل وإدخال أساليب حديثة للمشاتل البلاستيكية.",
  heroImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/WEATcOkfgBRxRptC.jpg",
  heroAlt: "أداة وصينية شتل زراعية",
  heroLabel: "صواني شتل · أدوات زراعية",
  problemTitle: "عمليات شتل أبسط بتكلفة اقتصادية.",
  problem: "يتناول المشروع أدوات تستخدم من قبل الفني الزراعي وأصحاب المشاتل والعمال لتسهيل زراعة صواني الشتل وتطوير أساليب العمل في المشاتل البلاستيكية.",
  problemPoints: ["تسهيل زراعة صواني الشتل", "إتاحة الأدوات للفنيين والعمال", "تكلفة تشغيل زهيدة"],
  solutionTitle: "أدوات عملية للمشتل الحديث.",
  solution: "تدعم الأدوات سير العمل اليومي في المشاتل عبر حلول بسيطة ومباشرة تساعد على اعتماد أساليب زراعية أحدث.",
  workflow: [
    { number: "01", title: "تجهيز صواني الشتل", copy: "استخدام أدوات مصممة لمراحل التعامل مع صواني الشتل." },
    { number: "02", title: "تسهيل عمل الفني", copy: "تقديم أدوات قابلة للاستخدام من الفنيين وأصحاب المشاتل والعمال." },
    { number: "03", title: "تحديث أسلوب العمل", copy: "دعم إدخال أساليب حديثة للمشاتل البلاستيكية." },
  ],
  metric: "اقتصادي",
  metricLabel: "أدوات مساعدة بزمن وكلفة تشغيل اقتصاديين",
  targetTitle: "من يستخدم الأدوات؟",
  audiences: ["فنيّو الزراعة", "أصحاب المشاتل", "العمال الزراعيون"],
  phase: "حلول زراعية للمشاتل",
  theme: "seedling",
};

function DetailPage({ data }: { data: DetailData }) {
  return (
    <div className={`detail-page detail-${data.theme}`} dir="rtl">
      <header className="detail-nav">
        <a href="#/" className="detail-back"><ArrowLeft size={18} /> العودة إلى المشاريع</a>
        <a href="#/" className="detail-brand detail-logo" aria-label="سادة التحكم - الصفحة الرئيسية"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663778931753/YhDNnPkTUAoVIycs.png" alt="شعار سادة التحكم لحلول الأتمتة والذكاء الاصطناعي" /></a>
      </header>
      <main>
        <section className="detail-hero">
          <div className="detail-hero-copy"><p className="detail-eyebrow">{data.index} / {data.eyebrow}</p><h1>{data.title}<br /><em>{data.accentTitle}</em></h1><p>{data.intro}</p><span className="detail-phase">{data.phase}</span></div>
          <figure className={`detail-hero-media${data.heroImage ? "" : " detail-hero-schematic"}`}>{data.heroImage ? <img src={data.heroImage} alt={data.heroAlt} /> : <div className="cnc-detail-mark" aria-label={data.heroAlt}><strong>CNC</strong><i /><span>WOOD ROUTER</span><small>LOCAL FABRICATION</small></div>}<figcaption>{data.heroLabel}</figcaption></figure>
        </section>

        <section className="detail-problem detail-section"><div className="detail-section-label">01 / الحاجة</div><div><h2>{data.problemTitle}</h2><p>{data.problem}</p></div><ul>{data.problemPoints.map((point) => <li key={point}><Check size={17} /> {point}</li>)}</ul></section>

        <section className="detail-solution detail-section"><div className="detail-section-label">02 / الحل</div><div className="solution-copy"><h2>{data.solutionTitle}</h2><p>{data.solution}</p></div><div className="workflow">{data.workflow.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>

        <section className="detail-impact"><div className="impact-stat">{data.metric}</div><div><p className="detail-section-label">03 / الأثر</p><h2>{data.metricLabel}</h2></div></section>

        <section className="detail-target detail-section"><div className="detail-section-label">04 / الاستخدام</div><div><h2>{data.targetTitle}</h2><div className="target-list">{data.audiences.map((audience, index) => <span key={audience}><b>0{index + 1}</b>{audience}</span>)}</div></div></section>

        <section className="detail-contact"><div><p className="detail-eyebrow">تواصل بشأن المشروع</p><h2>تواصل بشأن<br /><em>{data.title}</em></h2></div><div className="detail-contact-links"><a href="https://wa.me/963982401070" target="_blank" rel="noreferrer"><Phone size={17} /> تواصل عبر واتساب</a><a href="mailto:nomandawod96@gmail.com"><Mail size={17} /> راسلنا بالبريد</a></div></section>
      </main>
      <footer className="detail-footer"><span>سادة التحكم لحلول الأتمتة والذكاء الاصطناعي</span><a href="#/">العودة للصفحة الرئيسية</a></footer>
    </div>
  );
}

export function SmartIncubatorDetail() { return <DetailPage data={incubator} />; }
export function AutoMateXDetail() { return <DetailPage data={automatex} />; }
export function SchoolDetail() { return <DetailPage data={school} />; }
export function CncDetail() { return <DetailPage data={cnc} />; }
export function SeedlingToolsDetail() { return <DetailPage data={seedling} />; }
