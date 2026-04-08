import { Helmet } from 'react-helmet-async';

export default function HelmetContext() {
    return (
        <>
            <Helmet>
                <title>Chirag Mavadiya | Full Stack Developer Portfolio</title>
                <meta name="description" content="Portfolio showcasing React, Node.js projects and web development expertise" />
                <meta name="keywords" content="react,developer, portfolio, full stack, web development, javascript, typescript" />
                <meta property="og:title" content="Chirag Mavadiya | Portfolio" />
                <meta property="og:description" content="Check out my projects and skills" />
                <meta property="og:image" content="https://chiragmavadiya.netlify.app/images/chiragmavadiya.png" />
                <meta property="og:url" content="https://chiragmavadiya.netlify.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://chiragmavadiya.netlify.app/" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Chirag Mavadiya",
                        "jobTitle": "Full Stack Developer",
                        "url": "https://chiragmavadiya.netlify.app",
                        "email": "chiragmavadiya38@gmail.com",
                        "image": "https://chiragmavadiya.netlify.app/images/chiragmavadiya.png",
                        "knowsAbout": [
                            "React.js",
                            "Node.js",
                            "MongoDB",
                            "JavaScript",
                            "TypeScript",
                            "AWS",
                            "Docker"
                        ],
                        "sameAs": [
                            "https://www.linkedin.com/in/chirag-mavadiya-01a538186/",
                            "https://github.com/chiragmavadiya"
                        ]
                    })}
                </script>
            </Helmet>
        </>
    );
}