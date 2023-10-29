import React from "react";
import Layout from "@/layout/layout";
import Homepage from "@/components/homepage";
import About from "@/components/about";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

const Index = () => {
  return (
    <Layout>
      <Homepage />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Layout>
  );
};

export default Index;
