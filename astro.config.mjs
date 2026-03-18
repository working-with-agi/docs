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
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
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
          autogenerate: { directory: "showcase" },
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
