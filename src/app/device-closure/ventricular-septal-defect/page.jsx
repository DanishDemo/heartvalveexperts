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
  "Progressive damage to the heart and lungs",
  "Risk of developing irreversible pulmonary hypertension",
  "Frequent respiratory illnesses and fatigue",
  "Poor growth and development in children",
  "Increased likelihood of needing complex VSD surgery/procedure in Mumbai later",
  "Higher chance of heart failure or arrhythmias",
];

const benefitsData = [
  {
    iconSrc: "/images/service/icon/1.svg",
    title: "Minimally invasive",
    desc: "Many patients can avoid open-heart VSD surgery with catheter-based treatment",
  },
  {
    iconSrc: "/images/service/icon/2.svg",
    title: "Improved oxygen delivery",
    desc: "Prevents mixing of oxygenated and deoxygenated blood, ensuring better oxygen circulation",
  },
  {
    iconSrc: "/images/service/icon/3.svg",
    title: "Heart protection",
    desc: "Reduces strain on the ventricles and risk of heart failure",
  },
  {
    iconSrc: "/images/service/icon/4.svg",
    title: "Faster recovery",
    desc: "Shorter hospital stays and quicker return to daily activities",
  },
  {
    iconSrc: "/images/service/icon/5.svg",
    title: "No chest incision (in device-based cases)",
    desc: "Avoids scarring and sternotomy",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Long-term success",
    desc: "High closure rates and low complication risk",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "Stroke and infection prevention",
    desc: "Reduces the risk of embolism and endocarditis",
  },
  {
    iconSrc: "/images/service/icon/6.svg",
    title: "One-time treatment",
    desc: "A single VSD closure surgery/procedure offers lasting correction and peace of mind",
  },
];

const timelineData = [
  {
    title: "Day of Procedure",
    desc: "Most patients are discharged within 1–3 days after the VSD closure procedure.",
    iconSrc: "/images/service/icon/bed.svg",
  },
  {
    title: "1 Month",
    desc: "First follow-up and echocardiogram to check device or patch position.",
    iconSrc: "/images/service/icon/heart.svg",
  },
  {
    title: "6 Months",
    desc: "Continued clinical evaluation and medication review.",
    iconSrc: "/images/service/icon/eye.svg",
  },
  {
    title: "1 Year",
    desc: "Final follow-up to confirm successful healing and heart function.",
    iconSrc: "/images/service/icon/home.svg",
  },
  {
    title: "Beyond 1 Year",
    desc: "Annual check-ups only if advised by your heart specialist in Mumbai.",
    iconSrc: "/images/service/icon/laptop-medical.svg",
  },
];

const benefitsData2 = [
  {
    iconSrc: "/images/service/icon/b1.svg",
    title: "Experienced Team in VSD Closure",
    desc: "Our team routinely performs device-based VSD closure procedures with precision and high success rates.",
  },
  {
    iconSrc: "/images/service/icon/b2.svg",
    title: "Top Specialists for VSD Surgery in Mumbai",
    desc: "Our cardiology team is led by experts in VSD procedure in Mumbai, providing both interventional and surgical solutions.",
  },
  {
    iconSrc: "/images/service/icon/b3.svg",
    title: "Advanced Imaging & Technology",
    desc: "We use the latest equipment for 3D echocardiography for accurate diagnosis and treatment.",
  },
  {
    iconSrc: "/images/service/icon/b4.svg",
    title: "Tailored Treatment Approach",
    desc: "Whether you need a device closure or an open VSD closure surgery procedure, we personalize care based on your condition.",
  },
  {
    iconSrc: "/images/service/icon/b5.svg",
    title: "Comprehensive Recovery Support",
    desc: "From diagnosis to long-term follow-up, we guide you through every step of your healing journey.",
  },
];
const faqData = [
  {
    id: 1,
    question: "What is the best age for a VSD surgery procedure?",
    answer:
      "VSD surgery is ideally done in infancy or early childhood, especially if the defect is large or causing symptoms.",
  },
  {
    id: 2,
    question: "Can you live a normal life after the VSD closure procedure?",
    answer:
      "Yes, most people live a healthy, normal life after successful VSD closure procedure, with regular follow-ups.",
  },
  {
    id: 3,
    question: "What is the price of VSD surgery?",
    answer:
      "The cost of VSD surgery in Mumbai can range from ₹2.5 to ₹5 lakhs, depending on the hospital and approach used.",
  },
  {
    id: 4,
    question: "How long does a VSD device closure procedure take?",
    answer:
      "The device closure procedure usually takes about 2 to 3 hours, depending on the complexity of the defect and the patient’s condition.",
  },
  {
    id: 5,
    question: "What is the recovery time for VSD surgery/procedure?",
    answer:
      "Recovery after ventricular septal defect surgery typically takes 4 to 6 weeks, with shorter recovery for catheter-based closures.",
  },
  {
    id: 6,
    question: "What size VSD requires surgery?",
    answer:
      "A moderate to large VSD, especially with left-to-right shunting or symptoms, may require VSD closure surgery or catheter-based closure to prevent heart and lung damage.",
  },
  {
    id: 7,
    question: "What medication is given after VSD closure?",
    answer:
      "After a VSD closure procedure, most patients are given blood thinners or antiplatelet drugs for several months to prevent clot formation around the closure site.",
  },
  {
    id: 8,
    question: "How risky is a VSD closure procedure?",
    answer:
      "The VSD closure surgery procedure is safe in expert hands. Device closures have a low complication rate, while surgical repair may carry slightly higher risks but excellent long-term outcomes.",
  },
  {
    id: 9,
    question: "What is the difference between VSD and a normal heart?",
    answer:
      "In a normal heart, the ventricular septum fully separates the two lower chambers. A VSD is a hole in that wall, causing abnormal blood flow and increased strain on the heart and lungs, requiring VSD Closure surgery in Mumbai for correction.",
  },
];
const servciepage = () => {
  return (
    <div>
      <BreadCrumb
        title="VSD Closure"
        subpage="false"
        image="/images/service/teer/bread.png"
      />
      <TaviSection
        imageSrc="/images/service/teer/1.png"
        imageAlt="TEER Surgery"
        tag="About"
        title="What is VSD Closure Procedure?"
        description={[
          "A Ventricular Septal Defect (VSD) is a hole in the wall (septum) separating the two lower chambers of the heart (ventricles). This allows oxygen-rich blood to mix with oxygen-poor blood, forcing the heart and lungs to work harder. The VSD closure procedure is a minimally invasive or surgical method used to close this defect using a specialized device or patch. For eligible patients, VSD Closure surgery/procedure in Mumbai offers a safe and effective way to prevent complications like heart failure, pulmonary hypertension, and poor growth in children.",
        ]}
        buttonText="Book Appointment Now"
      />
      <ASDClosureSection
        tag="How It's Done"
        title="How is VSD Closure Done?"
        imageSrc="/images/asd-closure.png"
        imageAlt="ASD Closure Illustration"
        steps={[
          {
            text: (
              <>
                A small incision is made in the femoral vein or artery in the
                groin, based on the type and location of the VSD.
              </>
            ),
          },
          {
            text: (
              <>
                A catheter is guided to the heart using fluoroscopy and
                transesophageal echocardiography (TEE).
              </>
            ),
          },
          {
            text: <>The VSD is sized and located using real-time imaging.</>,
          },
          {
            text: (
              <>
                A specialized VSD closure device is placed across the defect
                using a controlled release technique.
              </>
            ),
          },
          {
            text: (
              <>
                After closure, the catheter is removed or the chest is closed in
                surgical cases.
              </>
            ),
          },
          {
            text: (
              <>
                Post-procedure care includes checking for residual shunts, valve
                issues, or arrhythmias, which are more common in VSD than ASD
                closures.
              </>
            ),
          },
        ]}
      />

      <TaviWhoFor
        sectionTag="Who It’s For?"
        heading="Who Needs PFO Closure?"
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
        sectionLabel="Benefits of VSD Closure"
        heading="What are the Benefits of VSD Device Closure?"
        sectionIconSrc="/images/icon/Ellipse 3.svg"
      />
      <ProcedureDelayRisks
        title="Risks of Delay of VSD Closure"
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