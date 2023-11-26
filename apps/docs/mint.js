exports.default = {
  "$schema": "https://mintlify.com/schema.json",
  "name": "Starter Kit",
  "logo": {
    "dark": "/logo/dark.png",
    "light": "/logo/light.png"
  },
  "favicon": "/favicon.svg",
  "colors": {
    "primary": "#9333EA",
    "light": "#9333EA",
    "dark": "#9333EA",
    "anchors": {
      "from": "#9333EA",
      "to": "#9333EA"
    }
  },
  "openapi": "https://api.meetfaq.com/docs-json",
  "api": {
    "baseUrl": "https://api.meetfaq.com",
  },
  "topbarLinks": [
    {
      "name": "Support",
      "url": "mailto:hi@mintlify.com"
    }
  ],
  "modeToggle": {
    "default": "light"
  },
  "topbarCtaButton": {
    "name": "Dashboard",
    "url": "https://dashboard.mintlify.com"
  },
  "tabs": [
    {
      "name": "Public API Reference",
      "url": "public-api-reference"
    },
    {
      "name": "Internal API Reference (Self-Hosted)",
      "url": "api-reference"
    }
  ],
  "anchors": [
    {
      "name": "Documentation",
      "icon": "book-open-cover",
      "url": "https://mintlify.com/docs"
    },
    {
      "name": "Community",
      "icon": "slack",
      "url": "https://mintlify.com/community"
    },
    {
      "name": "Blog",
      "icon": "newspaper",
      "url": "https://mintlify.com/blog"
    }
  ],
  "navigation": [
    {
      "group": "Get Started",
      "pages": ["introduction", "quickstart", "development"]
    },
    {
      "group": "Essentials",
      "pages": ["essentials/markdown", "essentials/code", "essentials/images", "essentials/settings", "essentials/navigation"]
    },
    {
      "group": "API Documentation",
      "pages": ["api-reference/introduction"]
    }
  ],
  "footerSocials": {
    "twitter": "https://twitter.com/mintlify",
    "github": "https://github.com/mintlify",
    "linkedin": "https://www.linkedin.com/company/mintsearch"
  }
};
