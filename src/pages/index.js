import client from "@/lib/apollo-client";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import {
  Banner,
  Service,
  Blogs,
  Colours,
  Navbar,
  Footer,
  About,
  Category,
  Dealer,
} from "@/components";
import "../app/globals.css";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_HOME_PAGE_DATA,
  });

  console.log(data);

  return {
    props: {
      homepageData: data.pages.nodes[0].homepage || [],
      about: data.pages.nodes[0].homepage || null,
      categories: data.pages.nodes[0].homepage.categories || [],
      dealer: data.pages.nodes[0].homepage || null,
      blogs: data.blogs.nodes,
    },
  };
}

export default function Home({
  homepageData,
  blogs,
  about,
  categories,
  dealer,
}) {
  return (
    <div>
      <Navbar />
      <Banner banners={homepageData.banners} />
      <About about={about} />
      <Category categories={categories} />
      <Service />
      <Colours />
      <Dealer dealer={dealer} />
      {/* <Blogs blogs={blogs} /> */}
      <Footer />
    </div>
  );
}
