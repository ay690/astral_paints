import client from "@/lib/apollo-client";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { Banner, Blogs, Navbar,Footer, About } from "@/components";
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
      blogs: data.blogs.nodes,
    },
  };
}

export default function Home({ homepageData, blogs, about }) {
  return (
    <div>
      <Navbar />
      <Banner banners={homepageData.banners} />
      <About about={about}/>
      {/* <Blogs blogs={blogs} /> */}
      <Footer />
    </div>
  );
}
