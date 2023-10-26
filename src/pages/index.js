import React from "react";
import Layout from "@/layout/layout";
import Homepage from "@/components/homepage";
import About from "@/components/about";

const Index = () => {
  return (
    <Layout>
      <Homepage />
      <About />
    </Layout>
  );
};

export default Index;
