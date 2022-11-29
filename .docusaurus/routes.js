import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'df8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '625'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '526'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3cb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '265'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '934'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd86'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '023'),
    routes: [
      {
        path: '/docs/Analytics/competitors',
        component: ComponentCreator('/docs/Analytics/competitors', '514'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/profile-activity',
        component: ComponentCreator('/docs/Analytics/profile-activity', 'e95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/buyer_engagement_score',
        component: ComponentCreator('/docs/buyer_engagement_score', '628'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Buyer-activity/buyer-intent',
        component: ComponentCreator('/docs/Buyer-activity/buyer-intent', '765'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Buyer-activity/leads',
        component: ComponentCreator('/docs/Buyer-activity/leads', 'e60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Buyer-activity/track_your_prospects',
        component: ComponentCreator('/docs/Buyer-activity/track_your_prospects', '776'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/analytics',
        component: ComponentCreator('/docs/category/analytics', '806'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/buyer-activity',
        component: ComponentCreator('/docs/category/buyer-activity', '013'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/marketing-content',
        component: ComponentCreator('/docs/category/marketing-content', '0cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/product-profile',
        component: ComponentCreator('/docs/category/product-profile', '89a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/review-management',
        component: ComponentCreator('/docs/category/review-management', 'f81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/webhooks',
        component: ComponentCreator('/docs/category/webhooks', '15b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/G2-API',
        component: ComponentCreator('/docs/G2-API', '1d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/get-started',
        component: ComponentCreator('/docs/get-started', '807'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Integrations/about-g2-integrations',
        component: ComponentCreator('/docs/Integrations/about-g2-integrations', '4c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/crowd_quotes',
        component: ComponentCreator('/docs/Marketing-content/crowd_quotes', '937'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/documents',
        component: ComponentCreator('/docs/Marketing-content/documents', '9c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/g2_badges',
        component: ComponentCreator('/docs/Marketing-content/g2_badges', '081'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/reference_pages',
        component: ComponentCreator('/docs/Marketing-content/reference_pages', '831'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/report-library',
        component: ComponentCreator('/docs/Marketing-content/report-library', '2c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketing-content/widgets',
        component: ComponentCreator('/docs/Marketing-content/widgets', 'd71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/notifications',
        component: ComponentCreator('/docs/notifications', '00b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/discussions',
        component: ComponentCreator('/docs/Product Profile/discussions', 'ea8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/downloads',
        component: ComponentCreator('/docs/Product Profile/downloads', '827'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/ethics_values',
        component: ComponentCreator('/docs/Product Profile/ethics_values', '38b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/features',
        component: ComponentCreator('/docs/Product Profile/features', 'f99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/packages_pricing',
        component: ComponentCreator('/docs/Product Profile/packages_pricing', '73c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/product_information',
        component: ComponentCreator('/docs/Product Profile/product_information', 'fd1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/screenshots',
        component: ComponentCreator('/docs/Product Profile/screenshots', '357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product Profile/videos',
        component: ComponentCreator('/docs/Product Profile/videos', '04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Product-Suites',
        component: ComponentCreator('/docs/Product-Suites', 'e45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Review Management/campaign_dashboard',
        component: ComponentCreator('/docs/Review Management/campaign_dashboard', 'ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Review Management/custom_questions',
        component: ComponentCreator('/docs/Review Management/custom_questions', '4cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Review Management/references-from-reviews',
        component: ComponentCreator('/docs/Review Management/references-from-reviews', '0b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Review Management/review_campaigns',
        component: ComponentCreator('/docs/Review Management/review_campaigns', '56b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Review Management/review-activity',
        component: ComponentCreator('/docs/Review Management/review-activity', 'd5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Webhooks/g2-leads-webhooks/hubspot_webhook',
        component: ComponentCreator('/docs/Webhooks/g2-leads-webhooks/hubspot_webhook', '715'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Webhooks/g2-leads-webhooks/salesforce_crm_webhook',
        component: ComponentCreator('/docs/Webhooks/g2-leads-webhooks/salesforce_crm_webhook', '542'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Webhooks/in-app-g2-review-prompts/basics_of_in_app_review_prompts',
        component: ComponentCreator('/docs/Webhooks/in-app-g2-review-prompts/basics_of_in_app_review_prompts', '066'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Webhooks/in-app-g2-review-prompts/implementation_in_app_g2_review',
        component: ComponentCreator('/docs/Webhooks/in-app-g2-review-prompts/implementation_in_app_g2_review', '978'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Webhooks/in-app-g2-review-prompts/prompt_guidelines',
        component: ComponentCreator('/docs/Webhooks/in-app-g2-review-prompts/prompt_guidelines', '811'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dbd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
