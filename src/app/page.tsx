import { Hero } from "@/components/home/Hero";
import { FounderIntro } from "@/components/home/FounderIntro";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyUs } from "@/components/home/WhyUs";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { HomeTopics } from "@/components/home/HomeTopics";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HomeTopics />
      <FounderIntro />
      <WhyUs />
      <InstagramFeed />
    </>
  );
}
