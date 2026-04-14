import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import satori from "satori";

const entries = await getCollection("docs");

const fontPath = path.resolve("./src/assets/fonts/DejaVuSans.ttf");
const fontBuffer = fs.readFileSync(fontPath);

const bgPath = path.resolve("./src/pages/og/_background-image.png");
const bgBase64 = fs.readFileSync(bgPath, { encoding: "base64" });

export async function getStaticPaths() {
  const paths = entries.map((entry) => ({
    params: { route: (entry.id || "index") + ".png" },
    props: { title: entry.data.title, description: entry.data.description },
  }));

  // Ensure index is handled if not already in entries
  if (!paths.some((p) => p.params.route === "index.png")) {
    paths.push({
      params: { route: "index.png" },
      props: { title: "18 Months", description: "Kiến thức sản phụ khoa" },
    });
  }

  return paths;
}

export async function GET({ props }: { props: { title: string; description: string } }) {
  const { title, description } = props;

  const svg = await satori(
    {
      type: "div",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: [
                {
                  type: "div",
                  props: {
                    children: title,
                    style: {
                      fontSize: 60,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 24,
                      lineHeight: 1.2,
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    children: description,
                    style: {
                      fontSize: 32,
                      color: "#ccc",
                      lineHeight: 1.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    },
                  },
                },
              ],
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                padding: "0 80px",
                borderLeft: "32px solid #fff",
              },
            },
          },
        ],
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(data:image/png;base64,${bgBase64})`,
          backgroundSize: "1200px 630px",
          backgroundColor: "#000",
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "DejaVuSans",
          data: fontBuffer,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
