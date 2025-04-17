import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CalendarIcon, Clock, User, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { CompactBooking } from '../components/CompactBooking';
import { Helmet } from 'react-helmet';
export const BlogPostPage = () => {
  const {
    slug
  } = useParams();
  const blogPosts = {
    'a-tokeletes-hajapolas-titkai': {
      title: 'A tökéletes hajápolás titkai',
      excerpt: 'Fedezze fel a professzionális hajápolás legfontosabb lépéseit és trükkjeit...',
      content: `
        <h2>A helyes hajápolási rutin kialakítása</h2>
        <p>A haj egészségének megőrzése nem csak a szalonban kezdődik. A mindennapi hajápolási rutin kialakítása kulcsfontosságú a gyönyörű, egészséges haj eléréséhez és megtartásához.</p>
      `,
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      author: 'Kovács Anna',
      date: '2023. december 1.',
      readTime: '5 perc',
      category: 'Hajápolás'
    },
    '2024-es-frizura-trendek': {
      title: '2024-es frizura trendek',
      content: `
        <h2>2024 legizgalmasabb frizura trendjei</h2>
        <p>Az új év új trendeket hoz a hajformázás világába. Szakértőink összegyűjtötték a legforróbb frizura trendeket, amelyek 2024-ben uralják majd a szépségipart.</p>
        <h3>1. Modern bob variációk</h3>
        <p>A klasszikus bob frizura újragondolt változatai továbbra is népszerűek maradnak. A textúrált, réteges megoldások különösen divatosak lesznek.</p>
        <h3>2. Természetes hullámok</h3>
        <p>A természetes hatású, laza hullámok továbbra is trendinek számítanak. A "beach waves" look egész évben népszerű marad.</p>
        <h3>3. Merész színek és színátmenetek</h3>
        <p>2024-ben a természetes színek mellett a merészebb árnyalatok is megjelennek. A pasztell színek és a színátmenetes festések különösen népszerűek lesznek.</p>
        <h2>Színtrendek 2024-ben</h2>
        <ul>
          <li>Hamvas szőke árnyalatok</li>
          <li>Meleg karamell tónusok</li>
          <li>Rózsaarany árnyalatok</li>
          <li>Természetes barna színek</li>
        </ul>
      `,
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      author: 'Nagy Bence',
      date: '2023. november 28.',
      readTime: '4 perc',
      category: 'Trendek'
    },
    'teli-borapolasi-rutin': {
      title: 'Téli bőrápolási rutin',
      content: `
        <h2>A téli bőrápolás alapjai</h2>
        <p>A hideg időjárás különleges kihívások elé állítja bőrünket. A megfelelő téli bőrápolási rutin kialakítása elengedhetetlen a bőr egészségének megőrzéséhez.</p>
        <h3>1. Hidratálás fokozása</h3>
        <p>Télen a bőr hajlamosabb a kiszáradásra. Használjon gazdagabb hidratáló krémeket és olajokat a bőr megfelelő hidratáltságának fenntartásához.</p>
        <h3>2. Védelem a környezeti hatásoktól</h3>
        <p>A hideg szél és a fűtött helyiségek különösen megviselik a bőrt. Használjon védő hatású termékeket és ne feledkezzen meg az SPF használatáról sem.</p>
        <h2>Téli bőrápolási tippek</h2>
        <ul>
          <li>Használjon olaj alapú tisztítókat</li>
          <li>Kerülje a forró vizes mosakodást</li>
          <li>Alkalmazza a réteges hidratálást</li>
          <li>Ne feledkezzen meg az ajakápolásról</li>
        </ul>
        <h3>Ajánlott kezelések télen</h3>
        <p>A téli időszakban különösen ajánlottak a hidratáló és tápláló arckezelések. Szakembereink személyre szabott kezeléseket kínálnak a téli bőrproblémák megelőzésére és kezelésére.</p>
      `,
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2035&q=80',
      author: 'Szabó Eszter',
      date: '2023. november 25.',
      readTime: '6 perc',
      category: 'Bőrápolás'
    }
  };
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) {
    return <div>Blog post not found</div>;
  }
  const contentSections = [{
    type: 'text',
    content: `
        <h2>A helyes hajápolási rutin kialakítása</h2>
        <p>A haj egészségének megőrzése nem csak a szalonban kezdődik. A mindennapi hajápolási rutin kialakítása kulcsfontosságú a gyönyörű, egészséges haj eléréséhez és megtartásához.</p>
      `
  }, {
    type: 'image',
    src: '/images/blog/hajapolas/hajapolas-1.jpg',
    alt: 'Professzionális hajápolás'
  }, {
    type: 'text',
    content: `
        <h3>1. A megfelelő sampon kiválasztása</h3>
        <p>A hajtípusnak megfelelő sampon kiválasztása az első és legfontosabb lépés. A zsíros, száraz vagy festett haj mind különböző összetételű sampont igényel. Kerülje a túl agresszív, sok szulfátot tartalmazó termékeket.</p>
      `
  }, {
    type: 'image',
    src: '/images/blog/hajapolas/hajapolas-2.jpg',
    alt: 'Hajápolási termékek'
  }, {
    type: 'text',
    content: `
        <h3>2. Rendszeres hajmaszk használata</h3>
        <p>Hetente legalább egyszer érdemes hajmaszkot használni. A maszk segít helyreállítani a haj szerkezetét és extra hidratálást biztosít. Különösen fontos ez festett vagy gyakran hőkezelt haj esetén.</p>
      `
  }];
  return <main>
      <Helmet>
        <title>{post.title} | Lazars Szépségszalon Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          image: post.image,
          author: {
            '@type': 'Person',
            name: post.author
          },
          datePublished: post.date,
          articleSection: post.category
        })}
        </script>
      </Helmet>
      <article className="relative">
        <div className="relative h-[60vh] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <motion.div className="max-w-3xl mx-auto text-center" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1
            }}>
                <span className="inline-block bg-[#B4943E] text-white px-4 py-1 rounded-full text-sm mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-[#38363C]/60 hover:text-[#B4943E] transition-colors">
                <ArrowLeft size={20} />
                <span>Vissza a főoldalra</span>
              </Link>
              <Link to="/blog" className="inline-flex items-center gap-2 text-[#38363C]/60 hover:text-[#B4943E] transition-colors">
                <ArrowLeft size={20} />
                <span>Vissza a bloghoz</span>
              </Link>
            </div>
            {contentSections.map((section, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} className="mb-12 last:mb-0">
                {section.type === 'text' ? <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{
              __html: section.content
            }} /> : <div className="aspect-video rounded-xl overflow-hidden my-8">
                    <img src={section.src} alt={section.alt} className="w-full h-full object-cover" />
                  </div>}
              </motion.div>)}
            <motion.div className="mt-16 pt-8 border-t border-gray-200" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <CompactBooking />
      </article>
    </main>;
};