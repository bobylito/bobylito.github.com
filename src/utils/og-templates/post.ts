import satori from "satori";
// import { html } from "satori-html";
import { SITE } from "@/config";
import fs from "node:fs/promises";
import loadGoogleFonts from "../loadGoogleFont";
import path from "node:path";

const imgPath = "./public/bobylito-blank-og.jpg";
const imageB64 = await fs.readFile(path.resolve(imgPath), {
  encoding: "base64",
});
const base64ImageStr = `data:image/jpeg;base64,${imageB64}`;

export type PostInfos = {
  title?: string | null;
  description?: string | null;
};
export default async (post: PostInfos) => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          backgroundImage: `url(${base64ImageStr})`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8bcb9",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                width: "94%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 128,
                          fontWeight: "bold",
                          maxHeight: "44%",
                          overflow: "hidden",
                        },
                        children: post.title,
                      },
                    },
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 64,
                          fontWeight: "bold",
                          maxHeight: "40%",
                          overflow: "hidden",
                        },
                        children: post.description,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 56,
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 2400,
      height: 1260,
      embedFont: true,
      fonts: await loadGoogleFonts(
        `${post.title}${post.description}${SITE.title}by`
      ),
    }
  );
};
