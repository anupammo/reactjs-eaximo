import { useEffect } from "react";

const InjectMeta = ({ title, description, url, image }) => {
    useEffect(() => {
        document.title = title; // Update Page Title

        const metaTags = [
            { name: "description", content: description },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:url", content: url },
            { property: "og:image", content: image },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: image }
        ];

        metaTags.forEach(({ name, property, content }) => {
            const meta = document.querySelector(
                name ? `meta[name="${name}"]` : `meta[property="${property}"]`
            );
            if (meta) {
                meta.setAttribute("content", content);
            } else {
                const newMeta = document.createElement("meta");
                if (name) newMeta.setAttribute("name", name);
                if (property) newMeta.setAttribute("property", property);
                newMeta.setAttribute("content", content);
                document.head.appendChild(newMeta);
            }
        });
    }, [title, description, url, image]);

    return null;
};

export default InjectMeta;
