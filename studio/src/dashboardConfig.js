export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6238306b5ccc1655160298e1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-u9hvpu69",
                  apiId: "f20c69a0-bb7c-455a-9653-86b00146e5c4",
                },
                {
                  buildHookId: "6238306bc2e8e81578e66520",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pk6qmnxa",
                  apiId: "566bd636-c9e5-4a59-97a4-8c5020866ee6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/HuyAms/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pk6qmnxa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
