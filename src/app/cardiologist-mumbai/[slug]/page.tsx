"use client"; // important for client-side rendering

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // to get the slug
import BreadCrumb from "@/component/BreadCrumb";
import Doctor from "@/component/Doctors/Doctor";
import DoctorProfile from "@/component/Doctors/DoctorProfile";
import AppointmentCTA from "@/component/AppointmentCTA";

interface DoctorData {
  id: number;
  title: string;
  slug: string;
  featured_image?: {
    url: string;
    alt: string;
  };
  designation: string;
  cardiologist_description:string;
  cardiologist_long_details?: SectionData[];
}

interface SectionData {
  title: string;
  description: string; // HTML string from API
  icon?: {
    url: string;
    alt?: string;
  };
}

export default function DoctorPageClient() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState<DoctorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchDoctor = async () => {
      try {
        const res = await fetch(
          `https://hclient.in/heartvalveexperts/wp-json/custom-api/v1/cardiologists?slug=${slug}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          console.error("API returned status:", res.status);
          setDoctor(null);
          setLoading(false);
          return;
        }

        const data: DoctorData = await res.json();
        console.log(data,"fsdfsdfsdhnfsdhfiod");
        
        setDoctor(data);
        // console.log(data.length > 0 ? data[0] : null,"dcd");
        
      } catch (error) {
        console.error("Error fetching doctor:", error);
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [slug]);
 // ✅ Skeleton Loader
  if (loading) {
    return (
      <section className="bg-white">
        <div className=" mx-auto p-6">
          {/* Breadcrumb Skeleton */}
          <div className="h-96 bg-gray-200 rounded w-full mb-6 animate-pulse"></div>

          {/* Doctor Card Skeleton */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-48 h-48 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              <div className="h-10 bg-gray-300 rounded w-40 mt-4 animate-pulse"></div>
            </div>
          </div>

          {/* Doctor Profile Skeleton */}
          <div className="mt-10 space-y-6">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }



  if (!doctor) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-red-600">Doctor not found</p>
      </div>
    );
  }

  const description = [
    "TAVI, or Transcatheter Aortic Valve Implantation, is a minimally invasive procedure used to treat a narrowed aortic valve, also known as aortic stenosis...",
    "It involves inserting a new valve through a catheter, usually via the femoral artery in the thigh...",
  ];

  return (
    <>
      <BreadCrumb
        title={doctor.title}
        subpage="false"
        image="/images/contact.png"
      />
      <Doctor
        image={doctor.featured_image?.url ?? "/placeholder.png"}
        alt={doctor.featured_image?.alt ?? doctor.title}
        tag={doctor.designation}
        title={doctor.title}
        description={doctor.cardiologist_description}
        buttonText="Book Appointment Now"
      />
      <DoctorProfile
        sections={doctor.cardiologist_long_details?.map((item) => ({
          title: item.title,
          description: item.description,
          iconUrl: item.icon?.url || "",
        }))}
      />
      <AppointmentCTA />
    </>
  );
}
