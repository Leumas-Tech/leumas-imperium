# Imperium Configuration File Structure Guide

This document provides a detailed overview of the essential structure of an Imperium configuration file. It explains every key, what it does, and how it influences your application. While the guide covers all necessary fields, you’re free to extend the configuration with additional keys as needed.

---

## Overview

An Imperium configuration file is a JavaScript module that exports a function. When invoked, this function returns an object that serves as the blueprint for your application. The object’s keys determine how your app handles routing, theming, headers, footers, shared components, and integrations with external services. This single configuration file acts as a dedicated router, passing necessary settings to the core Imperium App component.

Each configuration file is designed to be self-contained. Based on the URL or subdomain, the core App dynamically loads the corresponding configuration, enabling:
- **Multi-domain support:** Different configurations for various subdomains.
- **Consistent SSO:** A single sign-on experience across all apps.
- **Centralized maintenance:** One build applies to all apps, so updates to shared components or themes propagate automatically.

---


## Example structure (Empty)

Below is an example of a blank configuration file structure for Imperium. This template outlines the necessary keys and provides inline comments to explain each section. You can use this as a starting point to create your own configuration files.

```jsx
// blank-config.jsx

export default ({ baseApiUrl, trackingApiKey }) => ({
  // Unique identifier for your application (e.g., "myapp.example.com")
  appName: "",

  // Theme setting to control the visual style (e.g., "default", "dark")
  theme: "",

  // Base API URL for constructing dynamic endpoints
  baseApiUrl: baseApiUrl,

  // Header configuration: defines the top section of your app
  header: {
    // React component used to render the header
    component: null,
    // URL to fetch header link configurations
    headerLinksUrl: "",
    // (Optional) URL for mega menu configuration
    megaMenuUrl: "",
    // You can add additional properties as needed (e.g., callback functions)
  },

  // Footer configuration: defines the bottom section of your app
  footer: {
    // React component used to render the footer
    component: null,
    // URL to fetch footer link configurations
    footerLinksUrl: "",
    // URL for social media links or icons
    socialsUrl: "",
  },

  // Routing configuration: controls navigation within your app
  routes: {
    // Public routes: accessible without authentication
    publicRoutes: [
      /*
      {
        path: "",              // URL path (e.g., "/home")
        component: null,       // React component to render
        pageName: "",          // Friendly name for the page
        description: "",       // (Optional) Brief description of the page
        pageInstructions: "",  // (Optional) Instructions for the page or assistant
        capabilities: []       // (Optional) Array of capability objects for extra functionality
      }
      */
    ],
    // Protected routes: require user authentication
    protectedRoutes: [
      // Define route objects as above for pages that require auth
    ],
    // Shared routes: common routes available across configurations
    sharedRoutes: [
      // Define shared route objects here
    ],
  },

  // Optional global components to be applied across all routes
  components: {
    // Example: customSidebar: null,
  },

  // Store configurations for external integrations
  stores: {
    leumasStores: [
      // Configuration objects for Leumas-specific services
    ],
    printifyStores: [
      // Configuration objects for Printify integrations
    ],
    shopifyStores: [
      // Configuration objects for Shopify integrations
    ],
  },

  // API key for tracking or authentication; provided via parameter
  apiKey: trackingApiKey,
});

```

## Detailed Structure

### 1. **appName**
- **Description:**  
  A unique identifier for your application, often corresponding to a domain or subdomain (e.g., "ip.leumas.tech" or "programming.leumas.tech").
- **Purpose:**  
  It helps identify the configuration during routing and may be used in display titles or logging. This value is essential for differentiating multiple apps served from the same build.

---

### 2. **theme**
- **Description:**  
  The theme setting determines the visual style and layout for your application.
- **Purpose:**  
  By setting a theme (for instance, “default”), you control which style sheets or CSS-in-JS settings are applied. This key ensures that even if multiple apps share the same core logic, they can have distinct appearances.

---

### 3. **baseApiUrl**
- **Description:**  
  This is the root URL for all API calls made by your application.
- **Purpose:**  
  It is used to dynamically build URLs (e.g., for header and footer links). The base API URL centralizes backend configuration and can be adjusted per environment (development, staging, production).

---

### 4. **Header Configuration**
- **Sub-keys:**
  - **component:**  
    The React component responsible for rendering the header.
  - **headerLinksUrl:**  
    A URL that fetches additional data or configuration for header links.
  - **megaMenuUrl:**  
    (Optional) A URL used to configure an advanced mega menu.
  - **Additional Properties:**  
    Custom properties (such as callback functions for sign-out) can be added here.
- **Purpose:**  
  This section defines what the header looks like and how it behaves. If an application-specific header is provided, it will override the global header settings.

---

### 5. **Footer Configuration**
- **Sub-keys:**
  - **component:**  
    The React component that renders the footer.
  - **footerLinksUrl:**  
    A URL for retrieving footer link configurations.
  - **socialsUrl:**  
    A URL for social media information or links.
- **Purpose:**  
  Like the header, the footer configuration ensures that every page in your application has a consistent footer. It can be overridden on a per-app basis while still maintaining global defaults.

---

### 6. **Routes**
Routes are the core of your configuration, dictating how the application navigates between pages and which components are rendered. They are divided into three distinct groups:

#### a. **publicRoutes**
- **Description:**  
  An array of route objects accessible without authentication.
- **Usage:**  
  Use this to define pages such as landing pages or informational screens that are open to all users.

#### b. **protectedRoutes**
- **Description:**  
  An array of route objects that require user authentication.
- **Key Properties for Each Route:**
  - **path:**  
    The URL path (e.g., `/ipapi`).
  - **component:**  
    The React component that should be rendered for this path.
  - **pageName:**  
    A friendly name for the page.
  - **description:**  
    (Optional) A short explanation of what the page does.
  - **pageInstructions:**  
    (Optional) Instructions or guidance shown to the user or passed to an AI assistant.
  - **capabilities:**  
    (Optional) An array of additional functions that can be triggered on this route.
- **Purpose:**  
  Protected routes ensure that only authenticated users can access certain parts of your application. They also provide a mechanism to include extra functionality via capabilities.

#### c. **sharedRoutes**
- **Description:**  
  An array of route objects that are common to all configurations.
- **Usage:**  
  These are used for pages or features that should be available regardless of the specific app configuration, such as a universal “About” page or global help section.

---

### 7. **Capabilities**
- **Description:**  
  Capabilities add extra, custom functions to a route. They allow the application to perform specific actions or interactions when triggered.
- **Structure:**
  - **name:**  
    A unique identifier for the capability.
  - **description:**  
    A brief explanation of what the capability does.
  - **async call({ ... }):**  
    An asynchronous function that takes parameters (e.g., grid IDs, cell data) and returns results. This is where custom logic is implemented.
- **Purpose:**  
  They enable advanced interactions, such as executing code cells or triggering AI functions (e.g., LEVIATHAN calls). Capabilities enhance the functionality of routes without changing the core routing logic.

---

### 8. **Components**
- **Description:**  
  An optional key where you can register additional React components that are applied globally across all routes.
- **Usage:**  
  This can include shared UI elements like speed-dial menus, sidebars, or notification components. It provides a central way to update shared parts of your UI.

---

### 9. **Stores**
- **Description:**  
  The stores section manages integrations with external services or data sources.
- **Sub-keys:**
  - **leumasStores:**  
    An array of configuration objects for Leumas-specific services.
  - **printifyStores:**  
    An array of configurations for Printify services.
  - **shopifyStores:**  
    An array of configurations for Shopify integrations.
- **Purpose:**  
  This section is essential for ecommerce or multi-service integrations. It allows you to manage various stores or data sources from a single configuration file.

---

### 10. **apiKey**
- **Description:**  
  A key used for tracking or authentication purposes.
- **Purpose:**  
  This value is passed to various components and services, ensuring secure access and proper analytics tracking across the application.

---

## Extending the Configuration

Remember, the keys listed above represent the necessary structure for Imperium to function. However, you are free to add additional keys or custom logic to suit your specific needs. The configuration file is highly modular and is designed to be extended without disrupting the core functionality of your application.

---




### Example
Here is a comprehensive example foa  what a cofig should look like

```jsx
// gallery.leumas.tech.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

// Instead of static imports, use React.lazy so that components are loaded on demand
const HomeLoggedIn = React.lazy(() =>
  import('../core/src/Pages/Home/HomeLoggedIn.jsx')
);
const Dashboard = React.lazy(() =>
  import('../core/src/Pages/Dashboard/Dashboard.jsx')
);
const HomeLoggedOut = React.lazy(() =>
  import('../core/src/Pages/Home/HomeLoggedOut.jsx')
);
const Login = React.lazy(() =>
  import('../core/src/Shared/Pages/Login/Login.jsx')
);
const Signup = React.lazy(() =>
  import('../core/src/Shared/Pages/Signup/Signup.jsx')
);
const PageNotFound = React.lazy(() =>
  import('../core/src/Shared/Pages/404/PageNotFound.jsx')
);
const Header1 = React.lazy(() =>
  import('../core/src/Globals/Headers/Header1/Header1.jsx')
);
const Header2 = React.lazy(() =>
  import('../core/src/Globals/Headers/Header2/Header2.jsx')
);
const Footer1 = React.lazy(() =>
  import('../core/src/Globals/Footers/Footer1/Footer1.jsx')
);
const Footer2 = React.lazy(() =>
  import('../core/src/Globals/Footers/Footer2/Footer2.jsx')
);
const Footer3 = React.lazy(() =>
  import('../core/src/Globals/Footers/Footer3/Footer3.jsx')
);
const Footer4 = React.lazy(() =>
  import('../core/src/Globals/Footers/Footer4/Footer4.jsx')
);
const Programming3D = React.lazy(() =>
  import('../core/src/3DProgramming/3DProgramming.jsx')
);
const Timeline = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/Timeline')
);
const PitchDeckPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/Pitchdeck')
);
const FAQLandingPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/FAQPage.jsx')
);
const Home = React.lazy(() =>
  import('../core/src/3DProgramming/Home')
);
const VisionAndMissionPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/VisionAndMissionPage.jsx')
);
const ContactPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/Contact.jsx')
);
const FeedbackLandingPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/Feedback.jsx')
);
const DemoCellPage = React.lazy(() =>
  import('../core/src/3dProgramming/Pages/DemoCell-NPM')
);
const DemoLandingPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/DemoLandingPage.jsx')
);
const RenderUIPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/RenderUIPage')
);
const RenderIframePage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/RenderIFramePage')
);
const RenderLocalPage = React.lazy(() =>
  import('../core/src/3DProgramming/Pages/RenderLocalPage')
);
const LeumasIdSignupFlow = React.lazy(() =>
  import('../core/src/AXIOS2.0/LeumasIdSignupFlow')
);
const TaskMancer = React.lazy(() =>
  import('../core/src/TaskMancer/Pages/TaskMancer')
);

const BuildLists = React.lazy(() => 
  import("../core/src/BulkForge/BuildLists")
)

export default ({ baseApiUrl, trackingApiKey }) => ({
  appName: 'programming.leumas.tech',
  theme: 'default',
  baseApiUrl,
  header: {
    component: Header2,
    headerLinksUrl: `${baseApiUrl}/configs/3d-programming`,
    megaMenuUrl: `${baseApiUrl}/configs/mega-menu`,
    useSignOut: useSignOut,
  },
  footer: {
    component: Footer4,
    footerLinksUrl: `${baseApiUrl}/configs/leumas-footerlinks`,
    socialsUrl: `${baseApiUrl}/configs/socials`,
  },
  routes: {
    publicRoutes: [
      // Add public routes here if needed.
    ],
    protectedRoutes: [
      {
        path: '/task-mancer',
        component: TaskMancer,
        pageName: 'Dataset Scraper Tool',
        description:
          "Allows you to provide URLs and query selections to scrape data.",
      },
      { path: '/list-builder', component: BuildLists, pageName: 'BuildListsPage' },

      {
        path: '/3DProgramming',
        component: Programming3D,
        pageName: 'Dataset Scraper Tool',
        description: "Will allow you to provide Url(s) as well as query selection for what to scraper. Ie, scrape all anchor tags on a page, and then scrape those links as well",
        pageInstructions: "You are on the 3D Programming page. The user may ask you to scrape data or execute code cells in the current grid.",
        capabilities: [
          {
            name: 'executeCells',
            description: 'Execute specified cells in the current 3D programming grid',
            async call({ gridId, cells }) {
              const results = {};
              for (let cell of cells) {
                const resp = await axios.post(`http://localhost:8080/grids/execute/${gridId}`, { entryCell: cell });
                results[cell] = resp.data.results ? resp.data.results[cell] : 'No result';
              }
              return results;
            }
          }
        ]
      },
      {
        path: '/3DProgramming/:gridId',
        component: Programming3D,
        pageName: 'Dataset Scraper Tool',
        description: "Will allow you to provide Url(s) as well as query selection for what to scraper. Ie, scrape all anchor tags on a page, and then scrape those links as well",
        pageInstructions: "You are on the 3D Programming page with a specific grid. The user may ask you to run code cells or interact with triggers in this grid.",
        capabilities: [
          {
            name: 'executeCells',
            description: 'Execute specified cells in the given grid',
            async call({ gridId, cells }) {
              const results = {};
              for (let cell of cells) {
                const resp = await axios.post(`http://localhost:8080/grids/execute/${gridId}`, { entryCell: cell });
                results[cell] = resp.data.results ? resp.data.results[cell] : 'No result';
              }
              return results;
            }
          },
          {
            name: 'listTriggers',
            description: 'List all triggers in the current grid',
            async call({ gridId }) {
              const resp = await axios.get(`http://localhost:8080/grids/${gridId}`);
              return resp.data.triggers || [];
            }
          }
        ]
      },
      // You can add additional protected routes here.
      {
        path: '/',
        component: Programming3D,
        pageName: '3D Programming Home',
        description:
          "The default 3D Programming page with grid interactions.",
        pageInstructions:
          "You are on the 3D Programming home page. Interact with the grid as needed.",
        capabilities: [
          {
            name: 'executeCells',
            description: 'Execute cells in the default grid',
            async call({ gridId, cells }) {
              const results = {};
              for (let cell of cells) {
                const resp = await axios.post(
                  `http://localhost:8080/grids/execute/${gridId}`,
                  { entryCell: cell }
                );
                results[cell] = resp.data.results
                  ? resp.data.results[cell]
                  : 'No result';
              }
              return results;
            },
          },
        ],
      },
    ],
    sharedRoutes: [
      {
        path: '/kyc',
        component: LeumasIdSignupFlow,
        props: {},
      },
      {
        path: '/render-ui',
        component: RenderUIPage,
        props: {},
      },
      {
        path: '/render-iframe',
        component: RenderIframePage,
        props: {},
      },
      {
        path: '/render-local',
        component: RenderLocalPage,
        props: {},
      },
      {
        path: '/feedback',
        component: FeedbackLandingPage,
        props: {},
      },
      {
        path: '/demos',
        component: DemoLandingPage,
        props: {},
      },
      {
        path: '/test-externally',
        component: DemoCellPage,
        props: {},
      },
      {
        path: '/timeline',
        component: Timeline,
        props: {},
      },
      {
        path: '/pitch-deck',
        component: PitchDeckPage,
        props: {},
      },
      {
        path: '/faq',
        component: FAQLandingPage,
        props: {},
      },
      {
        path: '/about/vision',
        component: VisionAndMissionPage,
        props: {},
      },
      {
        path: '/contact',
        component: ContactPage,
        props: {},
      },
      {
        path: '/',
        component: Home,
        props: {},
      },
      {
        path: '*',
        component: PageNotFound,
        pageName: 'PageNotFoundPage',
      },
    ],
  },
  // Remove server-only configuration from the client bundle.
  // If you need these on the server, load them separately.
  // server: { ... },
  apiKey: trackingApiKey,
});

```

## Conclusion

This configuration file structure is the backbone of your Imperium-powered application. It controls everything from routing and theming to integrations and advanced capabilities. By carefully setting each key and following best practices, you can create a highly customizable, scalable, and maintainable application.

Happy configuring, and may your Imperium apps be as dynamic and powerful as your vision! 🎉
