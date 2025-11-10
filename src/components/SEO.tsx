import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
};

const setMeta = (name: string, content: string) => {
  if (!content) return;
  let tag =
    document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ||
    document.createElement("meta");
  tag.setAttribute("name", name);
  tag.setAttribute("content", content);
  if (!tag.parentNode) document.head.appendChild(tag);
};

const setOG = (property: string, content: string) => {
  if (!content) return;
  let tag =
    document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`) ||
    document.createElement("meta");
  tag.setAttribute("property", property);
  tag.setAttribute("content", content);
  if (!tag.parentNode) document.head.appendChild(tag);
};

export default function SEO({
  title,
  description,
  url,
  image = "/tomatoo.png",
  keywords = [],
}: Props) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setMeta("description", description);
    if (keywords.length) setMeta("keywords", keywords.join(", "));

    if (title) {
      setOG("og:title", title);
      setMeta("twitter:title", title);
    }
    if (description) {
      setOG("og:description", description);
      setMeta("twitter:description", description);
    }
    if (url) {
      setOG("og:url", url);
    }
    if (image) {
      setOG("og:image", image);
      setMeta("twitter:image", image);
    }
  }, [title, description, url, image, keywords]);

  return null;
}
