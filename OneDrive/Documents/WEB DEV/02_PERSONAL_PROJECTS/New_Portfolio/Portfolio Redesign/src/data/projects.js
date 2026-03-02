import jelaniMotorsImg from "../assets/projects/jelanimotors.png";
import annotationImg from "../assets/projects/annotation.webp";
import kylepharmacyImg from "../assets/projects/kylepharmacy.webp";
import sneaker1Img from "../assets/projects/Sneaker-1.webp";
import sneaker2Img from "../assets/projects/Sneaker-2.webp";
import fashionStoreImg from "../assets/projects/FashionStore.webp";

export const projects = [
    {
        id: 1,
        title: "Jelani Motors Kenya",
        description:
            "A premium executive and corporate car hire platform for Nairobi and beyond. Features real-time fleet browsing, instant booking with WhatsApp integration, KYC verification, and a sleek responsive UI built for performance.",
        image: jelaniMotorsImg,
        width: 1400,
        height: 700,
        tags: ["React", "Tailwind CSS", "Firebase"],
        demoUrl: "https://jelanimotors.web.app",
        githubUrl: "https://github.com/Benardn254",
        featured: true,
    },
    {
        id: 2,
        title: "Annotation Portfolio",
        description:
            "A professional portfolio website showcasing annotation and data labeling projects with a clean, modern design.",
        image: annotationImg,
        width: 742,
        height: 514,
        tags: ["React", "Tailwind CSS", "Netlify"],
        demoUrl: "https://annotation-portfolio.netlify.app/",
        githubUrl: "https://github.com/Benardn254",
        featured: true,
    },
    {
        id: 3,
        title: "Kyle Pharmacy",
        description:
            "A full-featured pharmacy website with product catalog, services information, and an intuitive user interface.",
        image: kylepharmacyImg,
        width: 1351,
        height: 680,
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://benardn254.github.io/kylepharmacy/",
        githubUrl: "https://github.com/Benardn254",
        featured: true,
    },
    {
        id: 4,
        title: "Sneaker Store",
        description:
            "A stylish e-commerce sneaker store with dynamic product displays, modern UI, and smooth shopping experience.",
        image: sneaker1Img,
        width: 1346,
        height: 685,
        tags: ["HTML", "E-Commerce", "CSS", "JS"],
        demoUrl: "https://ready2walk.firebaseapp.com",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 5,
        title: "Sneaker Brand",
        description:
            "A premium sneaker brand landing page featuring bold visuals, streetwear aesthetics, and interactive elements.",
        image: sneaker2Img,
        width: 1328,
        height: 662,
        tags: ["React", "Vite", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 6,
        title: "Fashion Store",
        description:
            "A modern, responsive e-commerce fashion store built with HTML, CSS, and JavaScript.",
        image: fashionStoreImg,
        width: 1348,
        height: 682,
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://fashion-store5.web.app",
        githubUrl: "#",
        featured: true,
    },
];
