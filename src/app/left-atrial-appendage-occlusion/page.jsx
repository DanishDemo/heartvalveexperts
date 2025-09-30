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
    title: "Have non-valvular atrial fibrillation (AF)",
    desc: "LAAO is used to prevent stroke in patients with AF not caused by a heart valve issue, where clots commonly form in the left atrial appendage.",
  },
  {
    title: "Cannot tolerate long-term blood thinners",
    desc: "If medications like warfarin or NOACs cause side effects or are unsafe for you, the Left Atrial Appendage Occlusion Device offers a non-drug alternative.",
  },
  {
    title: "Have had bleeding complications on anticoagulants",
    desc: "LAAO is ideal for those who’ve experienced serious bleeding while on blood thinners.",
  },
  {
    title: "Prefer a one-time procedure over lifelong medication",
    desc: "LAAO provides stroke protection without the need for daily anticoagulants, under the care of a Left Atrial Appendage Occlusion specialist in Mumbai.",
  },
];

const risksData = [
  "Increased risk of stroke due to clot formation in the left atrial appendage",
  "Ongoing reliance on blood thinners despite bleeding risks",
  "Higher chance of major bleeding events",
  "Worsening of atrial fibrillation symptoms over time",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Reduces stroke risk in AF patients",
    desc: "Blocks the area where clots commonly form in atrial fibrillation.",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "No lifelong blood thinners needed",
    desc: "Most patients can stop anticoagulants shortly after the procedure.",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Minimally invasive procedure",
    desc: "Done through a small groin incision without open-heart surgery.",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Safer for those with bleeding risks",
    desc: "A good option if blood thinners have caused issues.",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Long-term stroke protection",
    desc: "One-time device placement with lasting results under expert care.",
  },
];

const timelineData = [
  {
    title: "Day 1",
    desc: "Admission, echocardiogram/TEE, pre-procedure imaging, and planning",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Day 2",
    desc: "LAAO device placement via a catheter-based procedure under general anesthesia",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Day 3",
    desc: "Post-procedure monitoring; discharge if stable",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Week 1",
    desc: "Resume light activity; blood thinners tapered under supervision",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Week 6-12",
    desc: "Follow-up transesophageal echo (TEE) to confirm device position and seal",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
  {
    title: "Beyond 3 Months",
    desc: "Long-term monitoring; most patients come off blood thinners completely",
    iconSrc: "/images/service/icon/walking.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Best Heart Surgeon Team in Mumbai",
    desc: "Trusted for handling complex heart valves and structural interventions with precision.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Leading Cardiologist in Mumbai",
    desc: "Specializes in atrial fibrillation care and non-surgical stroke prevention options like LAAO.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced 3D Echo Infrastructure",
    desc: "Equipped for safe and accurate left atrial appendage occlusion device implantation.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Multidisciplinary Heart Team",
    desc: "Combines expertise from interventional cardiology, electrophysiology, and cardiac anesthesia.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Stroke Risk Reduction Without Long-Term Blood Thinners",
    desc: "Especially suited for those who cannot tolerate anticoagulants.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Personalized LAAO Treatment Plans",
    desc: "Every patient receives tailored care from a Left Atrial Appendage Occlusion specialist in Mumbai.",
  },
];

const faqData = [
  {
    id: 1,
    question: "When should LAAO be considered?",
    answer:
      "LAAO is recommended for patients with AF who are at risk of stroke but cannot safely take long-term blood thinners due to bleeding complications.",
  },
  {
    id: 2,
    question: "How is the LAAO device implanted?",
    answer:
      "The Left Atrial Appendage Occlusion Device is placed using a catheter inserted through a vein in the leg and guided into the heart. The procedure takes 1–2 hours and does not require open-heart surgery.",
  },
  {
    id: 3,
    question: "Is the LAAO device permanent?",
    answer:
      "Yes, the device becomes part of your heart tissue over time, sealing the appendage permanently. Most patients can stop blood thinners after 3 months.",
  },
  {
    id: 4,
    question: "What are the risks of not treating the left atrial appendage?",
    answer:
      "Leaving the appendage open in AF patients significantly increases stroke risk, especially without blood thinners. This risk can be life-threatening.",
  },
  {
    id: 5,
    question: "Who performs LAAO in Mumbai?",
    answer:
      "Left Atrial Appendage Occlusion is typically performed by an experienced interventional cardiologist or structural heart specialist, often working alongside a team that includes electrophysiologists and cardiac anesthetists. At our center in Mumbai, the procedure is led by a Left Atrial Appendage Occlusion specialist with expertise in catheter-based therapies for atrial fibrillation, supported by leading cardiologists in Mumbai and a full structural heart team.",
  },
  {
    id: 6,
    question:
      "How much does the Left Atrial Appendage Occlusion procedure cost in Mumbai?",
    answer:
      "The left atrial appendage occlusion surgery/procedure in Mumbai typically costs ₹5–15 lakh, depending on the hospital, device, and case complexity.",
  },
  {
    id: 7,
    question:
      "How long does the Left Atrial Appendage Occlusion procedure take?",
    answer:
      "The procedure typically takes about 1 to 2 hours and is performed under general anesthesia or conscious sedation. Most patients return home the next day.",
  },
  {
    id: 8,
    question: "How is the Left Atrial Appendage Occlusion Device implanted?",
    answer:
      "The left atrial appendage occlusion device is inserted through a catheter via a vein in the leg and guided into the heart, avoiding the need for open-heart surgery.",
  },
];

const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="LAAO Surgery/Procedure"
        subpage="false"
        image="/images/service/LAAO/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/LAAO/1.png"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is Left Atrial Appendage Occlusion Surgery/Procedure?"
        description={[
          "Left Atrial Appendage Occlusion (LAAO) is a minimally invasive heart procedure designed to prevent strokes in patients with atrial fibrillation (AF) who are at high risk of bleeding and cannot take long-term blood thinners. The procedure involves closing off the small pouch in the left atrium (called the left atrial appendage) where blood settles and forms clots in AF patients.",
          "Using a small device called the Left Atrial Appendage Occlusion Device, the opening is sealed so clots can’t escape and cause a stroke. The procedure is typically done via a catheter through the groin and avoids open-heart surgery, making it safer for elderly patients or those with other medical conditions.",
        ]}
        buttonText="Book Appointment Now"
      />
      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs LAAO Surgery/Procedure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/LAAO/Rectangle 47.webp"
        imageAlt="Patient"
      />
      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of LAAO"
        heading="What are the Benefits of LAAO Surgery/Procedure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of LAAO Surgery/Procedure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/LAAO/Rectangle 49.webp"
        buttonText="Book Appointment Now"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="LAAO Procedure Timeline & Recovery"
          leftImageSrc="/images/service/LAAO/Rectangle 48.webp"
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