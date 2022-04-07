import axios from 'axios';
import { GetServerSideProps } from 'next';
import * as fs from 'fs'

const Sitemap = () => {
    return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://www.hondakudealerbandung.com'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000

    const carList = await axios.get(
      "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil"
    );
    const carListGrouped = carList.data.data.reduce(
      (objectsByKeyValue: any, obj: any) => {
        const value = obj["name"];
        objectsByKeyValue[value] = {
          ...objectsByKeyValue[value],
        };
        return objectsByKeyValue;
      },
      {}
    )

    const dynamicPaths = Object.keys(carListGrouped).map(key => {
      return `${BASE_URL}/katalog-mobil/${key}`
    })

    const staticPaths = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "sitemap.xml.tsx",
          "_app.tsx",
          "_document.tsx",
          "api"
        ].includes(staticPage);
      })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
    });

    const allPaths = [
      `${BASE_URL}`,
      ...staticPaths,,
      ...dynamicPaths
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // This is where we would be putting in our URLs
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;