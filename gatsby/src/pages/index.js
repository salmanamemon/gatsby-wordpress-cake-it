import * as React from "react";
import Seo from "../components/SEO/SEO";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import CTAArea from "../components/CTAArea/CTAArea";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";
import Quote from "../components/Quote/Quote";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
    <Quote />
  </Layout>
)

export default IndexPage
