import Head from 'next/head' //using head for SEO purpose

export default function SeoHead() {
  return (
    <Head>
    <link rel="icon" href="/JA-logo.png" type="image/png" alt="Jisoo An Logo" />
    <meta charset="UTF-8" />
    <title>Jisoo An - Front-end Developer | Sydney</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Seo Sydney Web / Jisoo An, email: seosydneyweb@gmail.com" />
    <meta name="keywords" content="Frontend web developer, React.js, Next.js, web design, mobile-friendly websites, SEO optimization, Sydney" />
    <meta name="description" content="I'm Jisoo An, a Frontend web developer based in Sydney. Specializing in React.js and Next.js, I create mobile-responsive websites with a focus on SEO." />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="robots" content="noindex, follow" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128129005-1" />
    </Head>
  )
}
