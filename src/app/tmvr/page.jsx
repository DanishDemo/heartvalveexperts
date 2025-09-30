import React from "react";
import TaviSection from "@/component/Services/TaviSection";
import TaviWhoFor from "@/component/Services/TaviWhoFor";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks2 from "@/component/Services/ProcedureDelayRisks2";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import ASDClosureSection from "@/component/Services/ASDClosureSection";

const conditionsData = [
  {
    title: "Previous cardiac surgery",
    desc: "Patients with a history of open-heart surgery who face increased risks with a repeat procedure",
  },
  {
    title: "High-risk elderly patients",
    desc: "Older adults with frailty or age-related conditions that make open surgery unsafe",
  },
  {
    title: "Chronic comorbidities",
    desc: "Conditions like chronic kidney disease, COPD, or diabetes that raise surgical risk",
  },
  {
    title:
      "Severe mitral regurgitation or degenerated bioprosthetic mitral valve",
    desc: "Patients with severe backflow of blood or a failing surgical mitral valve prosthesis may need valve-in-valve TMVR",
  },
];

const delayRiskData = {
  heading: "Outcomes of Procedure Delay",
  title: "Risks of Delay of TMVR Surgery/Procedure",
  risks: [
    { title: "Pulmonary hypertension", description: "Long-term mitral regurgitation can cause permanent high pressure in the lungs." },
    { title: "Atrial fibrillation (AFib)", description: "Ongoing regurgitation increases the risk of developing irregular heart rhythms." },
    { title: "Left atrial enlargement", description: "Delayed treatment causes the upper heart chamber to enlarge and function poorly." },
    { title: "Progressive valve deterioration", description: "Leakage worsens over time, making the valve harder to replace." },
    { title: "Reduced candidacy for TMVR", description: "Anatomical changes may make minimally invasive TMVR surgery/procedure no longer viable." },
    { title: "Increased risk of blood clots", description: "Abnormal blood flow raises the chance of stroke-causing clots." },
    { title: "Higher likelihood of heart failure", description: "The heart weakens over time due to persistent backflow." },
  ],
  imageSrc: "/images/service/TMVR/Rectangle 33.webp",
  imagePosition: "right",
};

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "No need for traditional open-heart surgery or chest opening",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Improved heart performance",
    desc: "Effectively reduces valve leakage and enhances cardiac efficiency",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Shorter hospital stay",
    desc: "Most patients are discharged within 2-5 days",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Faster recovery",
    desc: "Less pain, lower risk of infection, and quicker return to daily activities",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Safer for high-risk patients",
    desc: "Lower complication rates compared to conventional surgery",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Preserves chest integrity",
    desc: "No sternotomy required, which is especially beneficial for frail or elderly patients",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Hospital admission and pre-procedure advanced mitral imaging (3D TEE, CT) to assess valve anatomy",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "TMVR procedure performed via catheter approach through the femoral vein, often under conscious sedation",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3–5",
    desc: "Post-procedure monitoring and recovery in the ICU; most patients are discharged with aftercare instructions, some may require extended observation due to arrhythmia or mitral-specific complications",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1–2",
    desc: "Rest at home with light activity; your first follow-up may include checks for residual leakage or atrial fibrillation.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 2–3",
    desc: "Gradual return to routine activities; lifestyle adjustments and regular monitoring as some patients may need longer recovery if prior MitraClip or valve anatomy is complex",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond Week 3",
    desc: "Resume daily life; continue follow-up checks for valve function, interaction with prior mitral interventions, and maintain heart health practices",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Leading TMVR Specialists",
    desc: "Our TMVR specialists in Mumbai have extensive experience handling complex and high-risk TMVR cases.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Multidisciplinary Valve Team",
    desc: "Cardiologists, surgeons, imaging experts, anesthetists, and specialized nurses work together to provide world-class care.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Comprehensive TMVR Valve Clinic",
    desc: "We offer complete evaluation, diagnosis, and care for patients with complex mitral valve disease.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Advanced Imaging for Precision",
    desc: "Real-time 3D echocardiography and cardiac CT help in accurate valve sizing and positioning.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Affordable TMVR in Mumbai",
    desc: "Transparent pricing and access to high-quality care in a cost-effective manner.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Trusted by Patients Across India",
    desc: "Our outcomes and care make us a go-to center for those seeking the best TMVR surgeon/operator in Mumbai.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Is TMVR a surgery?",
    answer:
      "No, the TMVR procedure is not traditional open-heart surgery. It’s a minimally invasive, catheter-based treatment procedure that replaces the mitral valve without large incisions or the use of a heart-lung machine.",
  },
  {
    id: 2,
    question: "What is the cost of TMVR surgery/procedure in India?",
    answer:
      "The cost of TMVR in India typically ranges from ₹14–25 lakh in leading private hospitals. In selected centers or with our assistance programs, the cost may start from ₹10–15 lakh, depending on valve type and patient condition.",
  },
  {
    id: 3,
    question: "What is the success rate of TMVR?",
    answer:
      "Success rates for TMVR surgery/procedure in Mumbai are high when performed by experienced specialists. Most patients see significant improvement in heart function and quality of life.",
  },
  {
    id: 4,
    question: "What is the difference between TAVR and TMVR?",
    answer:
      "TAVR replaces the aortic valve; TMVR replaces the mitral valve. Both are catheter-based, minimally invasive procedures, but they treat different valves with different anatomical and procedural approaches.",
  },
  {
    id: 5,
    question: "How long is the ICU stay after mitral valve replacement?",
    answer:
      "For patients undergoing TMVR in Mumbai, ICU monitoring is usually required for 24–48 hours depending on patient stability.",
  },
  {
    id: 6,
    question: "Who is an ideal candidate for TMVR?",
    answer:
      "Patients with severe mitral regurgitation who are at high-risk for open surgery may be suitable for TMVR in Mumbai.",
  },
  {
    id: 7,
    question: "How long does the TMVR procedure take?",
    answer:
      "The TMVR surgery/procedure usually takes 1.5 to 3 hours, depending on patient complexity.",
  },
];

const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="TMVR Surgery/Procedure"
        subpage="false"
        image="/images/service/TMVR/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/TMVR/1.png"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is TMVR Surgery/Procedure?"
        description={[
          "MVR or Transcatheter Mitral Valve Replacement is a minimally invasive procedure for patients with a severely damaged mitral valve or mitral regurgitation, a condition where the mitral valve doesn't close properly, causing blood to leak backward into the heart. The TMVR procedure in Mumbai involves delivering a new valve through a catheter, usually via the femoral vein in the thigh, and implanting it within the existing mitral valve without the need to open the chest.",
          "TMVR in Mumbai is ideal for high-risk patients such as the elderly, those with prior heart surgeries, or individuals with multiple medical conditions. It improves heart function, reduces symptoms like breathlessness or fatigue, and shortens hospital recovery time.",
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs TMVR Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/TMVR/Rectangle 31.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of TMVR"
        heading="What are the Benefits of TMVR Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      {/* <ProcedureDelayRisks
        title="Risks of Delay of TAVI/TAVR Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/TMVR/Rectangle 33.webp"
        buttonText="Book Appointment Now"
      /> */}
      <ProcedureDelayRisks2 data={delayRiskData} />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="TAVI Procedure Timeline & Recovery"
          leftImageSrc="/images/service/TMVR/Rectangle 32.webp"
        />
        <FollowUpSection
          tag="Procedure Follow Up"
          title="Valve-in-Valve (ViV) TMVR"
          intro="Over time, surgically implanted bioprosthetic mitral valves can wear out. This is called structural valve degeneration and typically occurs 8–12 years after the original surgery. The tissue leaflets may stiffen, calcify, or tear, leading to narrowing (stenosis) or leakage (regurgitation)."
          subIntro="When this happens, Valve-in-Valve TMVR offers a minimally invasive alternative to repeat open-heart surgery. Instead of replacing the old valve entirely, a new transcatheter valve is placed inside the existing one."
          bulletPoints={[
            "Structural degeneration of the bioprosthetic mitral valve",
            "Leaflet calcification or thickening causing restricted movement",
            "Tearing or loosening of valve tissue leading to regurgitation ",
          ]}
          conclusion=""
          buttonText="Book Appointment Now"
          imageSrc="/images/service/tavi/5.jpg"
          imageAlt="Doctor Consultation"
        />
      </section>
      <TaviBenefits
        benefits={benefitsData2}
        sectionLabel="What Sets us Apart"
        heading="Why Choose Heart Valve Experts?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      {/* <HeartValveExperts /> */}
      <PatientSuccessStories />
      <FAQAccordion faqs={faqData} />
      <AppointmentCTA />
      {/* <ASDClosureSection
          tag="How It's Done"
          title="How Is ASD Closure Done?"
          imageSrc="/images/asd-closure.png"
          imageAlt="ASD Closure Illustration"
          steps={[
            { text: <>A small incision is made in the <b>femoral vein</b> in the groin.</> },
            { text: <>A catheter is guided to the heart using <b>fluoroscopy, TEE, and ICE</b> for defect visualization.</> },
            { text: <>The size of the <b>atrial septal defect</b> is carefully assessed.</> },
            { text: <>A <b>ASD closure device</b> is positioned across the defect via catheter.</> },
            { text: <>The device is released once proper positioning is confirmed.</> },
            { text: <>The catheter is withdrawn, and the puncture site is closed with a stitch or compression dressing.</> },
            { text: <><b>Post-procedure recovery</b> is generally faster, with lower chances of complications.</> },
          ]}
        /> */}
    </div>
  );
};

export default servciepage;