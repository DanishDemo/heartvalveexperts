// Only Faq Remaining by fahad

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
    title: "",
    desc: "",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "",
    desc: "",
  },
];

const risksData = [
  "Pulmonary hypertension due to prolonged extra blood flow to the lungs",
  "Heart enlargement and potential heart failure from volume overload",
  "Increased risk of infective endarteritis from abnormal blood vessel flow",
  "Poor feeding, slow weight gain, and delayed growth in infants",
  "Reduced exercise capacity and stamina in older children or adults",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Improved breathing",
    desc: "Reduces excess blood flow to the lungs, easing breathing effort",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Better weight gain",
    desc: "Enhances feeding tolerance and supports healthy growth in infants",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Heart protection",
    desc: "Prevents long-term strain on the heart and reduces the risk of heart failure",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Lower lung pressure",
    desc: "Helps avoid pulmonary hypertension caused by prolonged PDA",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "Minimally invasive recovery",
    desc: "Catheter-based PDA closure procedure ensures faster healing with minimal discomfort",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Reduced infection risk",
    desc: "Lowers the chances of endocarditis by closing the abnormal blood vessel",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Normal circulation restored",
    desc: "Eliminates abnormal flow between the aorta and pulmonary artery",
  },
];

const timelineData = [
  {
    title: "Hospital Stay",
    desc: "Usually 1–2 days for catheter-based PDA closure surgery",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "Activity Resumption",
    desc: "Most children can return to normal activities within 1 week",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "Follow-Up Care",
    desc: "Regular checkups to monitor device position and overall heart function",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "Pain Management",
    desc: "Mild discomfort may occur, usually managed with over-the-counter medication",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Long-Term Outlook",
    desc: "Excellent recovery with low risk of complications when treated timely",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Specialized PDA Closure Team",
    desc: "We offer catheter-based PDA closure procedures with consistently high success rates.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Tailored Device Choice",
    desc: "We use advanced PDA closure devices selected based on your child’s size and heart anatomy.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Pediatric Expertise",
    desc: "Our team has extensive experience managing PDA in infants, newborns, and children.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Precision Imaging",
    desc: "All procedures are guided by state-of-the-art imaging to ensure accurate and safe outcomes.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Low Complication Rates",
    desc: "Minimally invasive approach means fewer risks and a quicker recovery.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "Skilled Cardiology Team",
    desc: "Our interventional cardiologists in Mumbai are trusted experts in PDA management.",
  },
  {
    iconSrc: "/images/service/icon/b6.svg",
    title: "End-to-End Care",
    desc: "We provide personalized support from diagnosis through post-procedure follow-up.",
  },
];
const faqData = [
  {
    id: 1,
    question: "Is PDA closure an open-heart surgery?",
    answer:
      "No, PDA closure is usually done using a catheter-based, non-surgical procedure, not open-heart surgery.",
  },
  {
    id: 2,
    question: "Is PDA a hole in the heart?",
    answer:
      "Not exactly. A patent ductus arteriosus (PDA) is a persistent blood vessel that should close after birth but remains open, affecting normal blood flow.",
  },
  {
    id: 3,
    question: "What happens if the PDA is not closed?",
    answer:
      "If left untreated, PDA can lead to heart enlargement, lung damage, or heart failure, especially in infants and children.",
  },
  {
    id: 4,
    question: "What is the cost of PDA closure in India?",
    answer:
      "The cost of PDA closure in India typically ranges up to ₹2 lakhs, depending on the hospital, device, and patient age.",
  },
  {
    id: 5,
    question: "What to expect after PDA closure?",
    answer:
      "Most patients experience a quick recovery with improved heart function. Regular follow-ups ensure the PDA device is well-positioned and healing is on track.",
  },
  {
    id: 6,
    question: "What are the complications after PDA closure?",
    answer:
      "Complications are rare but may include residual leak, device migration, or arrhythmias. Choosing an experienced PDA closure center reduces these risks.",
  },
  {
    id: 7,
    question: "What are the options for PDA closure?",
    answer:
      "Options include catheter-based PDA device closure for most patients or surgical ligation in specific or complex cases. The choice depends on age, size, and PDA type.",
  },
  {
    id: 8,
    question: "What is the best age for PDA closure surgery/procedure?",
    answer:
      "PDA closure is ideally done in infancy or early childhood once the duct has failed to close naturally and causes symptoms or heart changes.",
  },
  {
    id: 9,
    question: "What is the recovery time for PDA closure?",
    answer:
      "Children typically recover within a few days after a catheter-based PDA closure procedure, with minimal restrictions.",
  },
];
const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="PDA Closure"
        subpage="false"
        image="/images/service/teer/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/teer/1.png"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is PDA Closure Procedure?"
        description={[
          "Patent Ductus Arteriosus (PDA) is a heart condition where a blood vessel called the ductus arteriosus remains open after birth. This creates an abnormal connection between the aorta and the pulmonary artery, allowing extra blood to flow into the lungs. Over time, this can strain the heart, raise lung pressure, and lead to symptoms like fast breathing, poor weight gain, or even heart failure.",
          "PDA closure is a medical procedure that seals this opening to restore normal blood circulation. Today, most PDA closure procedures are performed using a catheter-based technique, where a small device is delivered through a vein in the groin to close the PDA. This PDA closure procedure in Mumbai is minimally invasive, safe, and allows for a quicker recovery compared to traditional surgery.",
        ]}
        buttonText="Book Appointment Now"
      />
      <ASDClosureSection
        tag="How It's Done"
        title="How is PDA Closure Done?"
        imageSrc="/images/asd-closure.png"
        imageAlt="ASD Closure Illustration"
        steps={[
          {
            text: (
              <>
                A small incision is made in the <b>femoral vein</b> in the
                groin.
              </>
            ),
          },
          {
            text: (
              <>
                A catheter is guided into the heart and towards the PDA using
                fluoroscopy and echocardiography.
              </>
            ),
          },
          {
            text: <>The size and position of the PDA are measured precisely.</>,
          },
          {
            text: (
              <>
                A specialized PDA device closure procedure is performed, where a
                self-expanding device is positioned to block the abnormal
                opening.
              </>
            ),
          },
          {
            text: (
              <>
                Once correctly placed, the device is released, and tissue
                gradually grows over it.
              </>
            ),
          },
          {
            text: (
              <>
                The catheter is withdrawn, and the groin site is sealed with a
                stitch or dressing.
              </>
            ),
          },
        ]}
      />

      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs PDA Closure?"
        buttonText="Book Appointment Now"
        conditions={conditionsData}
        imageSrc="/images/service/tavi.webp"
        imageAlt="Patient"
      />

      <section className="animate-gradient-circle text-white relative overflow-hidden">
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
          imageSrc="/images/service/tavi/5.jpg"
          imageAlt="Doctor Consultation"
        />
      </section>

      <TaviBenefits
        benefits={benefitsData}
        sectionLabel="Benefits of PDA Closure"
        heading="What are the Benefits of PDA Device Closure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of PDA Closure"
        subtitle="Outcomes of Procedure Delay"
        risks={risksData}
        imageSrc="/images/service/tavi/3.jpg"
        buttonText="Book Appointment Now"
        imagePosition="left"
      />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <ProcedureTimeline
          timeline={timelineData}
          sectionTitle="Procedure Timeline"
          heading="Recovery & Follow-Up Timeline"
          leftImageSrc="/images/service/process.jpg"
          imagePosition="right"
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
    </div>
  );
};

export default servciepage;