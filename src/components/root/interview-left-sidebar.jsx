export default function InterviewLeftSidebar() {
    return (
        <aside class="nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,-100%,0)]">
            <div class="nx-px-4 nx-pt-4 md:nx-hidden">
                <div class="nextra-search nx-relative md:nx-w-64">
                    <div class="nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300">
                        <input spellcheck="false" class="nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current" type="search" placeholder="Search documentation…" value="" />
                    </div>
                </div>
            </div>
            <div class="nx-overflow-y-auto nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar nx-pr-2">
                <div class="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                    <div class="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100">
                        <ul class="nx-flex nx-flex-col nx-gap-1 max-md:nx-hidden">
                            <li class="nx-flex nx-flex-col nx-gap-1 active">
                                <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-50 nx-font-semibold nx-text-primary-600 dark:nx-bg-primary-500/10 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500" href="index.html">Introduction</a>
                            </li>
                            <li class="nx-flex nx-flex-col nx-gap-1">
                                <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="another">Another Page</a>
                            </li>
                            <li class="open">
                                <a class="nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="advanced">Advanced (A Folder)
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]"></path>
                                    </svg>
                                </a>
                                <div class="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                                    <div class="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                        <ul class="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                            <li class="nx-flex nx-flex-col nx-gap-1">
                                                <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="advanced/satori">Satori</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul class="nx-flex nx-flex-col nx-gap-1 md:nx-hidden">
                    <li class="nx-flex nx-flex-col nx-gap-1 active">
                        <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-50 nx-font-semibold nx-text-primary-600 dark:nx-bg-primary-500/10 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
                            href="index.html">Introduction</a>
                        <ul class="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                            <li>
                                <a href="#what-is-nextra" class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">What is Nextra?</a>
                            </li>
                            <li>
                                <a href="#documentation" class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Documentation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nx-flex nx-flex-col nx-gap-1">
                        <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="another">Another Page</a>
                    </li>
                    <li class="open">
                        <a class="nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="advanced">Advanced (A Folder)
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]"> </path>
                            </svg>
                        </a>
                        <div class="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                            <div class="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                <ul class="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                    <li class="nx-flex nx-flex-col nx-gap-1">
                                        <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="advanced/satori">Satori</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="nx-flex nx-flex-col nx-gap-1">
                        <a class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="about">About</a>
                    </li>
                    <li class="nx-flex nx-flex-col nx-gap-1">
                        <a href="https://twitter.com/shuding_" target="_blank" rel="noreferrer" class="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Contact
                            ↗
                            <span class="nx-sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nx-sticky nx-bottom-0 nx-bg-white dark:nx-bg-dark nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff] nx-flex nx-items-center nx-gap-2 dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111] contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none nx-border-t" data-toggle-animation="off">
                <div class="nx-relative nx-grow">
                    <button title="Change theme" class="nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 nx-w-full" id="headlessui-listbox-button-:Rlsr6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                        <div class="nx-flex nx-items-center nx-gap-2 nx-capitalize">
                            <svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="currentColor"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                            <span class="">light</span>
                        </div>
                    </button>
                </div>
            </div>
        </aside>
    )
}