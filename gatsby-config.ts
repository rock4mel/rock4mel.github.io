import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: `rock4mel`,
    siteTitleAlt: `Rock4Mel - Technology - Maximization Efficiency Limitless`,
    siteHeadline: `Rock4Mel - Aixo és mel`,
    siteUrl: `https://rock4mel.com`,
    siteDescription: `We specialize in providing inspirational talks, personalized support, and expert advice as true technology specialists. We take pride in guiding our clients every step of the way on their digital journey, ensuring that every decision is solid and strategic.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@rock4mel`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          //{ name: `Projects`, slug: `/projects` },
         // { name: `Art`, slug: `/art` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
