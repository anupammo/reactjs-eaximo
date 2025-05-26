document.addEventListener("DOMContentLoaded", function () {
    const metaData = {
        title: "Home Page | Your Website",
        description: "Welcome to our homepage! Explore our services and offerings.",
        url: "https://yourwebsite.com/",
        image: "https://yourwebsite.com/images/home-thumbnail.jpg",
        ogType: "website"
    };

    document.title = metaData.title; // Set page title dynamically

    const metaTags = [
        { name: "description", content: metaData.description },
        { property: "og:title", content: metaData.title },
        { property: "og:description", content: metaData.description },
        { property: "og:url", content: metaData.url },
        { property: "og:image", content: metaData.image },
        { property: "og:type", content: metaData.ogType },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaData.title },
        { name: "twitter:description", content: metaData.description },
        { name: "twitter:image", content: metaData.image }
    ];

    metaTags.forEach(({ name, property, content }) => {
        const metaTag = document.createElement("meta");
        if (name) metaTag.setAttribute("name", name);
        if (property) metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        document.head.appendChild(metaTag); // Inject directly into `<head>`
    });
});
