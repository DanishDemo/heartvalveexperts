import React from "react";
import TaviSection from "@/component/Services/TaviSection";
import TaviWhoFor from "@/component/Services/TaviWhoFor";
import BreadCrumb from "@/component/BreadCrumb";
import TaviBenefits from "@/component/Services/TaviBenefits";
import ProcedureTimeline from "@/component/Services/ProcedureTimeline";
import FollowUpSection from "@/component/Services/FollowUpSection";
import ProcedureDelayRisks from "@/component/Services/ProcedureDelayRisks";
import HeartValveExperts from "@/component/Services/HeartValveExperts";
import FAQAccordion from "@/component/Services/FAQAccordion";
import AppointmentCTA from "@/component/AppointmentCTA";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import ASDClosureSection from "@/component/Services/ASDClosureSection";

const conditionsData = [
  {
    title: "Severe aortic stenosis",
    desc: "Aortic valve ka narrow ho jana jisme patient ko chest pain, saans phoolna, ya behoshi ho sakti hai.",
  },
  {
    title: "Advanced age",
    desc: "Buzurg patients jinke liye open-heart surgery risky hoti hai ya recovery slow hoti hai.",
  },
  {
    title: "Previous cardiac surgery",
    desc: "Jo patients pehle heart surgery kara chuke hain, unke liye dobara open surgery risky hoti hai. TAVI unke liye safer option hai.",
  },
  {
    title: "Chronic kidney disease",
    desc: "Open surgery kidney ko affect karti hai, jabki TAVI se risk kam hota hai aur recovery fast hoti hai.",
  },
  {
    title: "Chronic lung conditions",
    desc: "COPD jaisi lung problems wale patients me open-heart surgery kaafi risky hoti hai.",
  },
  {
    title: "Multiple comorbidities",
    desc: "Agar patient ko diabetes, BP, ya stroke ka history hai to TAVI surgery unke liye better option hai.",
  },
];

const risksData = [
  "Worsening symptoms like breathlessness, chest pain, and fatigue",
  "Increased strain on the heart, leading to heart failure",
  "Higher chances of emergency hospitalisation",
  "Risk of fainting or sudden collapse",
  "Decline in overall physical strength and activity level",
  "Potential damage to other organs due to poor blood flow",
  "Reduced eligibility for minimally invasive procedures later",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive, suture less",
    desc: "No need for open-heart surgery, eliminating the need for stitches or chest bone cutting.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Faster recovery time",
    desc: "Most patients are discharged within 3 to 5 days.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Lower surgical risk",
    desc: "Especially beneficial for elderly or high-risk patients.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Improved symptoms",
    desc: "Relief from chest pain, breathlessness, fatigue, and dizziness.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Excellent survival outcomes",
    desc: "Survival rates comparable or better than open-heart surgery in high-risk and elderly patients.",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "No anaesthesia in most cases",
    desc: "Procedure is often performed under local anaesthesia.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Hospital admission and pre-procedure diagnostics (CT scan, echocardiogram, blood tests)",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "TAVI procedure performed using a catheter-based approach, usually under conscious sedation",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3–5",
    desc: "Observation and recovery in the hospital ICU; discharge typically occurs during this period with post-care instructions and a medication plan",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1–2",
    desc: "Rest at home with light activity, monitor the catheter site, take prescribed medications, and attend the first follow-up with your TAVI specialist",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 2–3",
    desc: "Gradual return to daily routines based on recovery progress; continue a heart-healthy lifestyle and regular monitoring",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond Week 3",
    desc: "Resume normal activities; maintain follow-up appointments and lifestyle adjustments for long-term heart health",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "City’s Leading TAVI Team",
    desc: "Our specialists have performed the highest number of TAVI surgeries in Mumbai, including complex and high-risk cases.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Affordable, Transparent Pricing",
    desc: "We provide high-quality heart care services at competitive rates, making advanced cardiac care more accessible.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Trusted by Patients Nationwide",
    desc: "Patients across India seek us out for our outcomes and the reputation of having the best TAVI surgeon/operator in Mumbai.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Alternative Access Expertise",
    desc: "Our team has extensive experience performing the TAVI surgery in Mumbai through alternative access routes when standard options are not viable.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Comprehensive Structural",
    desc: "We are one of the few centres equipped to perform the full range of structural heart procedures, including MitraClip, BMV, and PVL device closures.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Multidisciplinary Expertise",
    desc: "Every patient is cared for by a dedicated heart team comprising interventional cardiologists, cardiac surgeons, radiologists, anesthesiologists, and specialised nurses.",
  },
];
const faqData = [
  {
    id: 1,
    question: "What is the difference between a stent and a TAVI?",
    answer:
      "A stent opens blocked arteries, while TAVI replaces a narrowed aortic valve. Both are minimally invasive but treat different heart conditions.",
  },
  {
    id: 2,
    question: "Who is TAVI most suitable for and why?",
    answer:
      "TAVI is ideal for patients who are high-risk for open-heart surgery due to age, aortic stenosis, or conditions like diabetes, kidney disease, COPD, or prior heart procedures.",
  },
  {
    id: 3,
    question: "What preparations are required before a TAVI surgery/procedure?",
    answer:
      "Before the procedure, the team of doctors will assess your medical history and conduct diagnostic tests such as echocardiograms, blood work, and CT scans. These help your TAVI surgeon/operator determine your eligibility and customize the approach.",
  },
  {
    id: 4,
    question:
      "What are the possible adverse effects of the TAVI surgery/procedure?",
    answer:
      "TAVI is generally safe but may carry risks like heart attack, bleeding, stroke, kidney issues, or blood vessel damage. Choosing an experienced TAVI specialist helps minimise these risks.",
  },
  {
    id: 5,
    question:
      "What should I do after a TAVI procedure to ensure good recovery?",
    answer:
      "Follow up with your TAVI specialist, take medications as prescribed, keep the catheter site clean, start light activity gradually, and maintain a heart-healthy lifestyle.",
  },
  {
    id: 6,
    question: "What is the cost of the TAVI surgery/procedure in India?",
    answer:
      "The cost of TAVI in India typically ranges from ₹14 lakh to ₹28 lakh in private hospitals, depending on the valve type and patient condition.",
  },
  {
    id: 7,
    question: "Is TAVI better than open-heart surgery?",
    answer:
      "TAVI is less invasive and offers faster recovery, making it ideal for high-risk and elderly patients. Both TAVI and surgery can be performed in low-risk subsets, and TAVI is now USFDA-approved for low-risk patients. A specialist can help determine the best option for your individual case.",
  },
  {
    id: 8,
    question: "What is the life expectancy after TAVI?",
    answer:
      "Life expectancy after TAVI depends on age and overall health. Most patients see a better quality of life and long-term outcomes with proper care and follow-up.",
  },
  {
    id: 9,
    question: "How long does the TAVI procedure take?",
    answer:
      "TAVI surgery typically takes 1 to 2 hours, depending on the patient's condition and the complexity of the case.",
  },
  {
    id: 10,
    question: "Will I need blood thinners after TAVI surgery/procedure?",
    answer:
      "Yes, most patients need blood thinners or antiplatelet medications for a period after TAVI to prevent clot for at least 6 months. The exact type and duration depend on your heart rhythm, medical history, and bleeding risk. Your doctor will prescribe the safest option for you.",
  },
];

const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="TAVI/TAVR Surgery/Procedure"
        subpage="false"
        image="/images/service/TAVI/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/TAVI/1.png"
        imageAlt="TAVI Surgery"
        tag="About"
        title="What is TAVI Surgery/Procedure?"
        description={[
          "TAVI, or Transcatheter Aortic Valve Implantation, is a minimally invasive procedure used to treat a narrowed aortic valve, also known as aortic stenosis. It is also referred to as TAVR surgery/procedure, which stands for Transcatheter Aortic Valve Replacement. Instead of opening the chest as in traditional surgery, the TAVI surgery in Mumbai is a suture-less procedure.",
          "It involves inserting a new valve through a catheter, usually via the femoral artery in the thigh, and positioning it inside the damaged valve. The TAVI procedure in Mumbai is especially recommended for patients who are at high risk for open-heart surgery due to advanced age or other underlying health conditions.",
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs TAVI Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/TAVI/Rectangle 27.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of TAVI"
        heading="What are the Benefits of TAVI Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of TAVI/TAVR Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/TAVI/Rectangle 28.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="TAVI Procedure Timeline & Recovery"
          leftImageSrc="/images/service/TAVI/Rectangle 29.webp"
        />
        <FollowUpSection
          tag="Procedure Follow Up"
          title="Long-Term Follow Up After TAVI Procedure"
          intro="Modern transcatheter valves are designed for durability, but like all bioprosthetic valves, they can show structural deterioration over time."
          subIntro="The 10-year NOTION trial, which evaluated earlier generation TAVI devices, found that:"
          bulletPoints={[
            "TAVI valves had comparable long-term clinical outcomes to surgical valves, with similar rates of mortality, stroke, and myocardial infarction.",
            "TAVI valves showed a lower rate of severe structural valve deterioration (SVD) compared to surgical valves at 10 years.",
            "Hemodynamic performance was favorable for TAVI valves.",
            "The overall rate of bioprosthetic valve failure was similar between TAVI and surgical valves.",
          ]}
          conclusion="This highlights the importance of long-term planning with your heart team, considering factors like valve type, patient anatomy, and individual risks to ensure the best possible care throughout your lifetime."
          buttonText="Book Appointment Now"
          imageSrc="/images/service/TAVI/Rectangle 30.webp"
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