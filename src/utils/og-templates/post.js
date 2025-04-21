import satori from "satori";
// import { html } from "satori-html";
import { SITE } from "@/config";
import fs from "node:fs/promises";
import loadGoogleFonts from "../loadGoogleFont";

const imgPath = "./public/bobylito-blank-og.jpg";
const image = await fs.readFile(imgPath);
// convert image file to base64-encoded string
const base64Image = Buffer.from(image, "binary").toString("base64");

// combine all strings
const base64ImageStr = `data:image/jpeg;base64,${base64Image}`;

export default async post => {
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
                border: "16px solid #000",
                background: "#fefbfb",
                borderRadius: "24px",
                display: "flex",
                justifyContent: "center",
                background: "hsla(268, 26%, 25%, 0.7)",
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
                        children: post.data.title,
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
                        children: post.data.description,
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
                        children: [
                          {
                            type: "span",
                            props: {
                              children: [
                                "by ",
                                {
                                  type: "span",
                                  props: {
                                    style: { color: "transparent" },
                                    children: '"',
                                  },
                                },
                              ],
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: { overflow: "hidden", fontWeight: "bold" },
                              children: SITE.title,
                            },
                          },
                        ],
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
        post.data.title + post.data.description + SITE.title + "by"
      ),
    }
  );
};
