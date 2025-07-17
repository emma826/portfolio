import Image from "next/image";
import Link from "next/link";

import HomeProjects from "@/components/root/home-projects";
import HomeArticles from "@/components/root/home-articles";

export default function Home() {
	return (
		<>

			<div className="pointer-events-none relative flex flex-none flex-col">

				<div className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>

				<div className="sm:px-8 top-0 order-last -mb-3 pt-3">
					<div className="mx-auto w-full max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="top-(--avatar-top,--spacing(3)) w-full">
									<div className="relative">
										<div className="absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10" style={{ opacity: "var(--avatar-border-opacity, 0)", transform: "var(--avatar-border-transform)" }}></div>
										<Link aria-label="Home" className="block h-24 w-24 origin-left pointer-events-auto" href="/">
											<Image
												alt="Amoke Emmanuel Chinonye"
												className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-24 w-24"
												style={{ color: "transparent" }}
												width={500}
												height={500}
												src="/img/admin.jpg"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-none"></div>

			<main className="flex-auto">
				<div className="sm:px-8 mt-12">
					<div className="mx-auto w-full max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="max-w-2xl">
									<h1 className="text-3xl font-extrabold tracking-tight text-green-800 sm:text-4xl">AI Engineer, robotics enthusiast, and builder of intelligent systems.</h1>
									<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
										I’m Amoke Emmanuel, a deep learning engineer focused on Computer Vision and Reinforcement Learning. I build systems that can perceive, learn, and act. My goal is to create AI that interacts with the real world through sight and decision-making.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="sm:px-8 mt-16 md:mt-20">
					<div className="mx-auto w-full max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

									<HomeProjects />

								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="sm:px-8 mt-24 md:mt-28">
					<div className="mx-auto w-full max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
									<HomeArticles />

									<div className="space-y-10 lg:pl-16 xl:pl-24">

										<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
											<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
												<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
													<path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"> </path>
													<path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
												</svg>
												<span className="ml-3">Work</span>
											</h2>
											<ol className="mt-6 space-y-4">
												<li className="flex gap-4">
													<dl className="flex flex-auto flex-wrap gap-x-2">
														<dt className="sr-only">Company</dt>
														<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Planetaria</dd>
														<dt className="sr-only">Role</dt>
														<dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
														<dt className="sr-only">Date</dt>
														<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until Present">
															<time dateTime="2019">2019</time>
															<span aria-hidden="true">—</span>
															<time dateTime="2025">Present</time>
														</dd>
													</dl>
												</li>
											</ol>
											<Link className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
												href="#">Download Resume<svg viewBox="0 0 16 16" fill="none"
													aria-hidden="true"
													className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
													<path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
														strokeWidth="1.5" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg>
											</Link>
										</div>

										<form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
											action="https://spotlight.tailwindui.com/thank-you">
											<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"><svg
												viewBox="0 0 24 24" fill="none" strokeWidth="1.5"
												strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
												className="h-6 w-6 flex-none">
												<path
													d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
													className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
												</path>
												<path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
													className="stroke-zinc-400 dark:stroke-zinc-500"></path>
											</svg><span className="ml-3">Stay up to date</span></h2>
											<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I
												publish something new, and unsubscribe at any time.</p>
											<div className="mt-6 flex items-center"><span
												className="flex min-w-0 flex-auto p-px"><input type="email"
													placeholder="Email address" aria-label="Email address"
													required=""
													className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400" /></span><button
														className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
														type="submit">Join</button></div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
