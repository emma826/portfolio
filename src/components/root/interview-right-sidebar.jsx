export default function InterviewLeftSidebar() {
    return (
        <nav class="nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block nx-px-4" aria-label="table of contents">
            <div class="nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto] nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4">
                <p class="nx-mb-4 nx-font-semibold nx-tracking-tight">On This Page</p>
                <ul>
                    <li class="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                        <a href="#what-is-nextra" class="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50">What is Nextra?</a>
                    </li>
                    <li class="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                        <a href="#documentation" class="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50">Documentation</a>
                    </li>
                </ul>
                <div class="nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111] nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800 contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400">
                    <a href="https://github.com/shuding/nextra-docs-template/issues/new?title=Feedback%20for%20%E2%80%9CIntroduction%E2%80%9D&amp;labels=feedback" target="_blank" rel="noreferrer" class="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50">Question? Give us feedback →
                        <span class="nx-sr-only"> (opens in a new tab)</span>
                    </a>
                    <a class="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50" href="https://github.com/shuding/nextra-docs-template/pages/index.mdx">Edit this page</a>
                </div>
            </div>
        </nav>
    )
}