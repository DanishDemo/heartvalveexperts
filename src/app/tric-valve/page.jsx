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
    title: "Severe tricuspid valve regurgitation",
    desc: "A leaky tricuspid valve causes backward blood flow and often requires alternatives to surgical repair.",
  },
  {
    title: "Right-sided heart failure symptoms",
    desc: "Includes swelling in the legs, fatigue, liver congestion, or shortness of breath.",
  },
  {
    title: "Frequent hospital admissions for fluid overload",
    desc: "Ongoing need for treatment due to fluid retention and congestion.",
  },
  {
    title: "Ineligible for open-heart surgery",
    desc: "Turned down for tricuspid valve repair or replacement due to high surgical risk.",
  },
];

const risksData = [
  "Worsening right heart failure with fluid buildup and fatigue",
  "Persistent venous congestion causing leg swelling and ascites",
  "Progressive liver and kidney dysfunction",
  "Reduced device anchoring success due to vein dilation",
  "Increased frailty, raising future procedural risks",
  "Declining quality of life with limited physical activity",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "No need for open-heart surgery or chest bone cutting.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Local anesthesia",
    desc: "Performed without general anesthesia or use of a heart-lung machine.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Rapid recovery",
    desc: "Shorter hospital stay and minimal downtime compared to traditional surgery.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Symptom relief",
    desc: "Effectively reduces swelling, fatigue, and other signs of right heart failure.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Ideal for high-risk patients",
    desc: "Especially suited for elderly individuals or those unfit for surgery.",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Native valve preservation",
    desc: "Does not remove or replace the tricuspid valve directly.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Admission, echocardiography, CT scan, and blood work to assess femoral and jugular vein access.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "TricValve implantation via femoral vein under local anesthesia. Two valves are positioned in the inferior and superior vena cava.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3",
    desc: "Monitoring in ICU for valve positioning and right heart function.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 4-5",
    desc: "Discharge with medications to prevent clotting; post-op care instructions provided.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 1",
    desc: "Light activity can be resumed. Most patients report early relief from swelling and breathlessness.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Week 2-4",
    desc: "First follow-up with the cardiologist; echo to confirm valve position and function.",
    iconSrc: "/images/service/icon/walking.svg",
  },
  {
    title: "Week 6-8",
    desc: "Significant symptom improvement, reduced fluid retention, and enhanced energy levels.",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Mumbai’s Experienced TricValve Team",
    desc: "Performed India’s first TricValve in Mumbai and among the first few globally.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Best Heart Surgeon in Mumbai",
    desc: "Our lead heart specialist in Mumbai has over two decades of experience in complex structural heart procedures.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced Imaging & 3D Echo Support",
    desc: "High-precision imaging ensures accurate valve placement and minimal risk.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Personalized Care for High-Risk Patients",
    desc: "Every case is reviewed by a senior heart specialist in Mumbai with a custom treatment plan.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Integrated Heart Failure Management",
    desc: "Post-procedure monitoring and cardiology support for long-term health.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "High Surgical Success Rates",
    desc: "We have a proven track record in treating rare and complex valve pathologies, including TricValve.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Is the TricValve procedure safe?",
    answer:
      "Yes. It is a CE-approved system designed for high-risk patients who cannot undergo traditional tricuspid valve repair surgery in Mumbai. It avoids open-heart surgery, reducing complications.",
  },
  {
    id: 2,
    question:
      "What is the difference between TricValve and traditional tricuspid valve replacement?",
    answer:
      "TricValve is a non-surgical treatment for severe tricuspid regurgitation, where two bioprosthetic valves are placed in the vena cavae to reduce backflow without removing the native valve. In contrast, traditional tricuspid valve replacement is an open-heart surgery where the tricuspid valve is removed and replaced with a mechanical or tissue valve, requiring general anesthesia and a longer recovery.",
  },
  {
    id: 3,
    question: "How much does TricValve therapy cost in Mumbai?",
    answer:
      "Cost varies based on patient condition, hospital stay, and support care, but is generally less than open-heart tricuspid valve replacement surgery in Mumbai due to reduced ICU time and faster recovery.",
  },
  {
    id: 4,
    question: "Who is not eligible for TricValve?",
    answer:
      "Patients with active infections, intracardiac thrombus, or advanced left heart failure may not be suitable. A detailed evaluation by a heart specialist in Mumbai is necessary.",
  },
  {
    id: 5,
    question: "What are the contraindications for TricValve?",
    answer:
      "A recent myocardial infarction that occurred within less than a month, severe vena cava obstruction, or known allergy to device materials are contraindications of TricValve Surgery.",
  },
  {
    id: 6,
    question: "How does TricValve work?",
    answer:
      "TricValve uses two bioprosthetic valves implanted in the superior and inferior vena cava to prevent backflow from the right ventricle to the right atrium, easing symptoms of severe tricuspid regurgitation without removing the native valve.",
  },
  {
    id: 7,
    question: "How long does the TricValve procedure take?",
    answer:
      "The procedure typically takes about 1 to 2 hours and is performed under local anesthesia.",
  },
];

const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="TricValve Surgery/Procedure"
        subpage="false"
        image="/images/service/TricValve/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/TricValve/1.png"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is the TricValve Procedure?"
        description={[
          "TricValve is a minimally invasive, catheter-based procedure designed for patients with severe tricuspid valve regurgitation who are not suitable candidates for open-heart surgery. Also called the transcatheter bicaval valve system, it implants two biological valves into the superior and inferior vena cava to manage the abnormal flow caused by a leaky tricuspid valve, reducing symptoms like leg swelling, liver congestion, and breathlessness.",
          "Unlike conventional tricuspid valve repair surgery/procedure in Mumbai, this method avoids opening the chest or manipulating the native valve. The implanted valves reroute venous return, lowering stress on the heart and organs. For those seeking alternatives to tricuspid valve replacement surgery, TricValve offers a safer, faster-recovery option guided by expert heart surgeons in Mumbai.",
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs TricValve Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/TricValve/Rectangle 44.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of TricValve"
        heading="What are the Benefits of TricValve Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of TricValve Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/TricValve/Rectangle 46.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="TricValve Procedure Timeline & Recovery"
          leftImageSrc="/images/service/TricValve/Rectangle 45.webp"
        />
        {/* <FollowUpSection
            tag="Procedure Follow Up"
            title="Long-Term Follow Up After TAVI Procedure"
            intro="Modern transcatheter valves are designed for durability, but like all bioprosthetic valves, they can show structural deterioration over time."
            subIntro="The 10-year NOTION trial, which evaluated earlier generation TAVI devices, found that:"
            bulletPoints={[
              "TAVI valves had comparable long-term clinical outcomes to surgical valves, with similar rates of mortality, stroke, and myocardial infarction.",
              "TAVI valves showed a lower rate of severe structural valve deterioration (SVD) compared to surgical valves at 10 years.",
              "Hemodynamic performance was favorable for TAVI valves.",
              "The overall rate of bioprosthetic valve failure was similar between TAVI and surgical valves."
            ]}
            conclusion="This highlights the importance of long-term planning with your heart team, considering factors like valve type, patient anatomy, and individual risks to ensure the best possible care throughout your lifetime."
            buttonText="Book Appointment Now"
            imageSrc="/images/service/tavi/5.jpg"
            imageAlt="Doctor Consultation"
          /> */}
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