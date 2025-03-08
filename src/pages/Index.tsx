
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <Skills />
    </Layout>
  );
};

export default Index;
