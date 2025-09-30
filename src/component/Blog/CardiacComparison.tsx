"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

interface BlogData {
  image?: string;
  title?: string;
  long_description?: string;
}

interface CardiacComparisonProps {
  blog: BlogData;
}

export default function CardiacComparison({ blog }: CardiacComparisonProps) {
  return (
    <section className="bg-white px-2 lg:px-6 py-10 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="items-center justify-between gap-6 mb-12">
          {blog?.image && (
            <img
              src={blog.image}
              alt={blog?.title || "Heart Valve Experts"}
              className="w-full h-auto "
            />
          )}
        </div>

        {/* Blog Content */}
        <div
          className="bg-white prose prose-blue p-4 border-b pb-8 border-gray-200 mb-8 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog?.long_description || "" }}
        />
        <div className="flex items-center space-x-4 text-gray-600">
          <span style={{letterSpacing:'2px'}} className="uppercase text-sm lg:text-lg font-semibold">Share Article</span>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 ">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="cursor-pointer hover:text-blue-600 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="cursor-pointer hover:text-blue-400 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
            >
              <FaTwitter />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="cursor-pointer hover:text-blue-700 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://wa.me/?text=Check%20this%20article"
              target="_blank"
              className="cursor-pointer hover:text-green-500 transition text-xl sm:text-2xl border p-2 sm:p-3 rounded-full"
            >
              <FaWhatsapp />
            </Link>
          </div>

        </div>
       </div>
    </section>
  );
}
