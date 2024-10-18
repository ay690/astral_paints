import client from "@/lib/apollo-client";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { Banner, Blogs } from "@/components";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_HOME_PAGE_DATA,
  });

  return {
    props: {
      homepageData: data.pages.nodes[0].homepage,
      blogs: data.blogs.nodes,
    },
  };
}

export default function Home({ homepageData, blogs }) {
  return (
    <div>
      <Banner banners={homepageData.banners} />
      <Blogs blogs={blogs} />
    </div>
  );
}
