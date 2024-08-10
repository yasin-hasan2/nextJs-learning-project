import AboutCotents from "@/components/AboutCotents";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1> This is about page</h1>
      <AboutCotents></AboutCotents>
      <div>
        <Link href="/about/history" className="btn">
          history
        </Link>
        <Link href="/about/mission" className="btn">
          mission
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
