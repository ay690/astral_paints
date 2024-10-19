import client from "@/lib/apollo-client";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { Banner, Service, Blogs, Navbar, Footer, About, Category } from "@/components";
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
      blogs: data.blogs.nodes,
    },
  };
}

export default function Home({ homepageData, blogs, about, categories }) {
  return (
    <div>
      <Navbar />
      <Banner banners={homepageData.banners} />
      <About about={about} />
      <Category categories={categories} />
      <Service />
      {/* <Blogs blogs={blogs} /> */}
      <Footer />
    </div>
  );
}
