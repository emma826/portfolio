import { query } from "@/dbh";
import { redirect } from "next/navigation";

import Image from "next/image";

async function get_blog_details(blog_url) {

    const queryText = "SELECT * FROM portfolio_blogs WHERE url = $1";
    const values = [blog_url];
    const { rows } = await query(queryText, values);
    if (rows.length === 0) {
        return null; // Blog not found
    }
    return rows[0]; // Return the first blog found
}

export async function generateMetadata({ params }) {
    const blog_url = await params.blog_url;
    if (!blog_url) {
        return { title: "Blog Not Found" };
    }

    const blogDetails = await get_blog_details(blog_url);
    if (!blogDetails) {
        return { title: "Blog Not Found" };
    }

    return {
        title: blogDetails.title,
        description: blogDetails.meta_description,
        openGraph: {
            title: blogDetails.title,
            description: blogDetails.meta_description,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_STORAGE_SERVER}/featured_img/${blogDetails.featured_image}`,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export default async function Blog_urlPage({ params }) {
    const blog_url = await params.blog_url;

    if (!blog_url) {
        return redirect("/blog");
    }

    const blogDetails = await get_blog_details(blog_url);
    if (!blogDetails) {
        return redirect("/blog");
    }

    return (
        <main class="flex-auto">
            <div class="sm:px-8 mt-16 lg:mt-32">
                <div class="mx-auto w-full max-w-7xl lg:px-8">
                    <div class="relative px-4 sm:px-8 lg:px-12">
                        <div class="mx-auto max-w-2xl lg:max-w-5xl">
                            <div class="xl:relative">
                                <div class="mx-auto max-w-2xl">
                                    <article>
                                        <header class="flex flex-col">
                                            <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                                {blogDetails.title}
                                            </h1>
                                            <time
                                                    dateTime="2022-09-05"
                                                    class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span
                                                        class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span><span
                                                            class="ml-3">September
                                                    5,
                                                    2022</span></time>
                                        </header>
                                        <div class="mt-8 prose dark:prose-invert"
                                            data-mdx-content="true">
                                            <p>Most companies try to
                                                stay ahead of
                                                the curve when
                                                it comes to
                                                visual design,
                                                but for
                                                Planetaria we
                                                needed to create
                                                a brand that
                                                would still
                                                inspire us 100
                                                years from now
                                                when humanity
                                                has spread
                                                across our
                                                entire solar
                                                system.</p>
                                            <img alt=""
                                                loading="lazy"
                                                width="1310"
                                                height="872"
                                                decoding="async"
                                                data-nimg="1"
                                                style="color:transparent"
                                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=3840&amp;q=75 2x"
                                                src="../_next/planetaria-design-systemb554.png?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=3840&amp;q=75" />
                                            <p>I knew that to get it
                                                right I was
                                                going to have to
                                                replicate the
                                                viewing
                                                conditions of
                                                someone from the
                                                future, so I
                                                grabbed my space
                                                helmet from the
                                                closet, created
                                                a new Figma
                                                document, and
                                                got to work.</p>
                                            <h2>Sermone fata</h2>
                                            <p>Lorem markdownum,
                                                bracchia in
                                                redibam! Terque
                                                unda puppi nec,
                                                linguae
                                                posterior
                                                in utraque
                                                respicere
                                                candidus
                                                Mimasque formae;
                                                quae conantem
                                                cervice. Parcite
                                                variatus,
                                                redolentia
                                                adeunt. Tyrioque
                                                dies, naufraga
                                                sua adit
                                                partibus celanda
                                                torquere
                                                temptata, erit
                                                maneat et ramos,
                                                <a
                                                    href="#">iam</a>
                                                ait dominari
                                                potitus! Tibi
                                                litora matremque
                                                fumantia condi
                                                radicibus
                                                opusque.</p>
                                            <p>Deus feram verumque,
                                                fecit, ira
                                                tamen, terras
                                                per alienae
                                                victum. Mutantur
                                                levitate quas
                                                ubi arcum ripas
                                                oculos abest.
                                                Adest <a
                                                    href="#">commissaque
                                                    victae</a>
                                                in gemitus
                                                nectareis ire
                                                diva
                                                dotibus ora, et
                                                findi huic
                                                invenit; fatis?
                                                Fractaque dare
                                                superinposita
                                                nimiumque
                                                simulatoremque
                                                sanguine, at
                                                voce aestibus
                                                diu! Quid
                                                veterum hausit
                                                tu
                                                nil utinam
                                                paternos ima,
                                                commentaque.</p>
                                            <pre class="language-c"><code class="language-c">exbibyte_wins <span class="token operator">=</span> <span class="token function">gigahertz</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                grayscaleUtilityClient <span class="token operator">=</span> control_uat<span class="token punctuation">;</span>
                                                pcmciaHibernate <span class="token operator">=</span> <span class="token function">oop_virus_console</span><span class="token punctuation">(</span>text_mountain<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                <span class="token keyword">if</span> <span class="token punctuation">(</span>stateWaisFirewire <span class="token operator">&gt;=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                                                jfs <span class="token operator">=</span> <span class="token number">647065</span> <span class="token operator">/</span> <span class="token function">ldapVrml</span><span class="token punctuation">(</span>tutorialRestore<span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                metal_runtime_parse <span class="token operator">=</span> roomComputingResolution <span class="token operator">-</span> toolbarUpload <span class="token operator">+</span>
                                                ipx_nvram_open<span class="token punctuation">;</span>
                                                <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
                                                maximizeSidebar <span class="token operator">*=</span> <span class="token function">suffix_url</span><span class="token punctuation">(</span>flatbed <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> requirements_encoding_node <span class="token operator">+</span>
                                                only_qbe_media<span class="token punctuation">,</span> minicomputer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                <span class="token punctuation">{"}"}</span>
                                            </code></pre>
                                            <p>Aere repetiti
                                                cognataque
                                                natus. Habebat
                                                vela solutis
                                                saepe munus
                                                nondum adhuc
                                                oscula nomina
                                                pignora corpus
                                                deserat.</p>
                                            <h2>Lethaei Pindumve me
                                                quae dinumerat
                                                Pavor</h2>
                                            <p>Idem se saxa fata
                                                pollentibus
                                                geminos; quos
                                                pedibus. Est
                                                urnis Herses
                                                omnes nec
                                                divite: et ille
                                                illa furit sim
                                                verbis
                                                Cyllenius.</p>
                                            <ol>
                                                <li>Captus
                                                    inpleverunt
                                                    collo
                                                </li>
                                                <li>Nec nam
                                                    placebant
                                                </li>
                                                <li>Siquos
                                                    vulgus
                                                </li>
                                                <li>Dictis
                                                    carissime
                                                    fugae
                                                </li>
                                                <li>A tacitos
                                                    nulla
                                                    viginti
                                                </li>
                                            </ol>
                                            <p>Ungues fistula
                                                annoso, ille
                                                addit linoque
                                                motatque uberior
                                                verso
                                                <a
                                                    href="#">rubuerunt</a>
                                                confine
                                                desuetaque.
                                                <em>Sanguine</em>
                                                anteit
                                                emerguntque
                                                expugnacior est
                                                pennas iniqui
                                                ecce
                                                <strong>haeret</strong>
                                                genus: peiora
                                                imagine
                                                fossas Cephisos
                                                formosa!
                                                Refugitque amata
                                                <a
                                                    href="#">refelli</a>
                                                supplex. Summa
                                                brevis vetuere
                                                tenebas, hostes
                                                vetantis,
                                                suppressit,
                                                arreptum
                                                regna. Postquam
                                                conpescit
                                                iuvenis habet
                                                corpus, et
                                                erratica,
                                                perdere, tot
                                                mota
                                                ars talis.
                                            </p>
                                            <pre class="language-c"><code class="language-c">digital<span class="token punctuation">.</span>webcam_dual_frequency <span class="token operator">=</span> webmasterMms<span class="token punctuation">;</span>
                                                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> language_standalone_google<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                                                cc_inbox_layout <span class="token operator">*=</span> file_character<span class="token punctuation">;</span>
                                                task <span class="token operator">+=</span> p<span class="token punctuation">;</span>
                                                lockUnicode <span class="token operator">+=</span> <span class="token function">enterprise_monochrome</span><span class="token punctuation">(</span>tokenFunctionPersonal<span class="token punctuation">,</span> keyVirtual<span class="token punctuation">,</span>
                                                adf<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                <span class="token punctuation">{"}"}</span>
                                                <span class="token function">windows_binary_esports</span><span class="token punctuation">(</span><span class="token number">87734</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span>restoreRomTopology<span class="token punctuation">,</span> <span class="token function">adRaw</span><span class="token punctuation">(</span><span class="token number">407314</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                dongleBashThumbnail<span class="token punctuation">)</span><span class="token punctuation">,</span> interpreter<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                            </code></pre>
                                            <p>Sit volat naturam;
                                                motu Cancri.
                                                Erat pro simul
                                                quae valuit
                                                quoque timorem
                                                quam
                                                proelia: illo
                                                patrio <em>esse
                                                    summus</em>,
                                                enim sua
                                                serpentibus,
                                                Hyleusque. Est
                                                coniuge
                                                recuso; refert
                                                Coroniden
                                                ignotos manat,
                                                adfectu.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}