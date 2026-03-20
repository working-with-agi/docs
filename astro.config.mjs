import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      title: "WorkWithAGI",
      logo: {
        src: "./src/assets/logo-workai.png",
        replacesTitle: false,
      },
      customCss: ["./src/styles/site.css"],
      defaultLocale: "ja",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: {
        github: "https://github.com/aether-platform",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        },
        {
          tag: "script",
          content: `
            (function() {
              var p = window.location.pathname;
              if (p === '/' || p === '') {
                var lang = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
                var dest = lang.startsWith('ja') ? '/ja/' : '/en/';
                window.location.replace(dest);
              }
            })();
          `,
        },
      ],
      sidebar: [
        {
          label: "Overview",
          translations: { ja: "概要" },
          items: [
            {
              label: "What is WorkWithAI?",
              translations: { ja: "WorkWithAI とは" },
              link: "/overview/",
            },
            {
              label: "Features",
              translations: { ja: "機能一覧" },
              link: "/features/",
            },
          ],
        },
        {
          label: "Showcase",
          translations: { ja: "ショーケース" },
          items: [
            {
              label: "Overview",
              translations: { ja: "一覧" },
              link: "/showcase/",
            },
            {
              label: "Secretary.IO",
              translations: { ja: "Secretary.IO" },
              link: "/showcase/secretary-io/",
            },
            {
              label: "MAGI System Demo",
              translations: { ja: "MAGI System デモ" },
              link: "/showcase/magi-system/",
            },
          ],
        },
        {
          label: "Getting Started",
          translations: { ja: "はじめ方" },
          items: [
            {
              label: "Quick Start",
              translations: { ja: "クイックスタート" },
              link: "/getting-started/",
            },
            {
              label: "Integration Guide",
              translations: { ja: "インテグレーション" },
              link: "/integration/",
            },
            {
              label: "Architecture",
              translations: { ja: "アーキテクチャ" },
              link: "/architecture/",
            },
            {
              label: "Security",
              translations: { ja: "セキュリティ" },
              link: "/security/",
            },
          ],
        },
        {
          label: "SDK",
          translations: { ja: "SDK" },
          items: [
            {
              label: "Quick Start",
              translations: { ja: "クイックスタート" },
              link: "/sdk/quickstart/",
            },
            {
              label: "Pilot Mode",
              translations: { ja: "パイロットモード" },
              link: "/sdk/pilot-mode/",
            },
            {
              label: "Knowledge Base",
              translations: { ja: "ナレッジベース" },
              link: "/sdk/knowledge/",
            },
          ],
        },
        {
          label: "Pricing",
          translations: { ja: "料金プラン" },
          items: [
            {
              label: "Plans & Pricing",
              translations: { ja: "プラン・料金" },
              link: "/pricing/",
            },
          ],
        },
        {
          label: "Contact",
          translations: { ja: "お問い合わせ" },
          items: [
            {
              label: "Contact Us",
              translations: { ja: "お問い合わせ" },
              link: "/contact/",
            },
          ],
        },
      ],
      components: {
        Hero: "./src/components/landing/CustomHero.astro",
        Footer: "./src/components/CustomFooter.astro",
      },
    }),
  ],
});
