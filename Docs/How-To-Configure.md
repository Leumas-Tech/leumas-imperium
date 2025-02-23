# Imperium Configuration Guide

Welcome to the Imperium Configuration Guide! This document explains how you can create and customize configuration files for your Imperium‑powered React applications. Each configuration file you create is essentially a new router setup for your application. It defines what pages (routes) are available, which components to render for those routes, and other settings like headers, footers, themes, and store configurations. This allows you to have multiple applications—all sharing the same compiled code in one build folder—while each app can have its own unique appearance and behavior based on its configuration.

---

## How It Works

When you build your Imperium‑based application, you end up with a single build (or **dist**) folder. The core **App** component uses environment variables and the current URL (or subdomain) to determine which configuration file to load. For example, if a user visits `https://bulkforge.leumas.tech`, the app will load the configuration for BulkForge. If they visit `https://podgpt.leumas.tech`, it will load the configuration for PodGPT. This approach allows you to:

- **Maintain a Single Build:** All your applications share the same compiled code, so updates (such as component changes, styling, and shared themes) automatically apply across all apps.
- **Enable Single Sign-On (SSO):** Logging into one Leumas app logs you into all Leumas apps in your browser.
- **Support Multiple Microservices:** Ideal for users creating multiple microservices or utilizing generative tools to set up various tools with unique configurations.

---

## Key Configuration Fields

Each configuration file is a JavaScript module that exports a function. This function receives parameters (like `baseApiUrl` and `trackingApiKey`) and returns an object with the following main sections:

### **appName**
- **Purpose:**  
  Uniquely identifies the application (e.g., "ip.leumas.tech" or "programming.leumas.tech"). This value is used for display, routing, and internal logic.

### **theme**
- **Purpose:**  
  Specifies the styling or theme for your application. Changing this value can alter the entire look and feel of your app.

### **baseApiUrl**
- **Purpose:**  
  The root URL for your API endpoints. It is used to dynamically build URLs for header links, footer links, and other resources throughout the app.

### **Header Configuration**
- **Key Properties:**
  - **component:**  
    The React component used to render the header.
  - **headerLinksUrl:**  
    A URL pointing to additional header configuration or links.
  - **megaMenuUrl:**  
    (Optional) A URL for the mega menu configuration.
  - **Additional Props:**  
    You can include functions (like sign-out handlers) or other properties that the header component might need.
- **Usage:**  
  These settings ensure a consistent header across all routes and pages.

### **Footer Configuration**
- **Key Properties:**
  - **component:**  
    The React component that renders the footer.
  - **footerLinksUrl:**  
    A URL for additional footer links or configuration.
  - **socialsUrl:**  
    A URL for social media or related resources.
- **Usage:**  
  The footer appears on all pages and provides essential navigation and branding.

### **Routes**
- **Structure:**  
  The routes are defined as an object with three keys:
  - **publicRoutes:**  
    An array of route objects accessible without authentication.
  - **protectedRoutes:**  
    An array of route objects that require user authentication.
  - **sharedRoutes:**  
    An array of route objects that are shared across different contexts.
- **Route Object Fields:**
  - **path:**  
    The URL path for the route.
  - **component:**  
    The landing component or page that is rendered.
  - **pageName:**  
    A human‑readable name for the page.
  - **description:**  
    (Optional) A brief description of what the page does.
  - **pageInstructions:**  
    (Optional) Instructions for the assistant or for user guidance on the page.
  - **capabilities:**  
    (Optional) An array of objects defining additional functions or features for that route.
  
  **Capabilities Structure:**
  - **name:**  
    The identifier for the capability.
  - **description:**  
    A short description of what the capability does.
  - **async call({ ... }):**  
    A function that accepts parameters, executes a process (such as sorting data or executing cells in a grid), and returns the results.
  
  *These route configurations are the bread and butter of your app—they control which pages appear and how they behave, including advanced features like the built‑in Leviathan component.*

### **Components**
- **Purpose:**  
  Optionally register custom components (e.g., speed dial buttons or asides) that are applied globally across all pages.
- **Usage:**  
  This is useful for shared UI elements that you want to appear on every route.

### **Stores**
- **Structure:**  
  An object that can include multiple arrays for store configurations, such as:
  - **leumasStores**
  - **printifyStores**
  - **shopifyStores**
- **Purpose:**  
  To configure different data or service stores that your application might integrate with.

### **apiKey**
- **Purpose:**  
  A tracking or authentication key passed throughout the application. It is used by various components and services to validate requests.

---

## Environment Configuration

To configure most aspects of your app, you must update your environment variables (e.g., in a `.env` file). Some critical environment variables include:

- **VITE_REACT_APP_STANDALONE_MODE:**  
  Set to `false` (or `true` if running in standalone mode).
- **VITE_REACT_APP_SELECTED_CONFIG:**  
  Determines which configuration file to load (e.g., `programming` or `bulkforge`).
- **VITE_REACT_APP_MODE:**  
  Indicates the current environment (`development`, `production`, or `staging`).
- **VITE_REACT_APP_SUBDOMAIN:**  
  Specifies the subdomain to use, which corresponds to one of your configuration files.
- **VITE_REACT_APP_ADMIN_MODE:**  
  Enables admin functionalities if set to `true`.

These variables guide the Imperium App in selecting the correct configuration at runtime.

---

## How Configurations Integrate with the Router

Each configuration file you create is automatically passed into your router by the core App component. This means that:
- **All routers share the same providers, contexts, and components.**  
  Changes to a shared component (like a header, footer, or theme) are reflected across every configured route.
- **Single Sign-On (SSO) is effortless.**  
  Logging into one Leumas app automatically logs you into all Leumas apps in your browser.
- **Dynamic Behavior Based on URL:**  
  The core App component examines the current URL (or subdomain) in production mode and loads the corresponding configuration. This lets you have two apps styled identically or completely differently—all from a single build folder.
- **Use Cases:**  
  - If `https://bulkforge.leumas.tech` is viewing the build, the configuration for BulkForge is loaded.
  - If `https://podgpt.leumas.tech` is viewing the build, the configuration for PodGPT is used.
  
This model is perfect for users creating multiple microservices or leveraging generative tools to set up numerous tools with shared functionality and styling.

---

## Sample Route Object Structure

A route object in your configuration might look like this (in conceptual terms):

- **path:** `/3d-prog`
- **component:** A React component (e.g., `3DProg`)
- **pageName:** "3D Prog"
- **description:** "This page handles 3D programming interactions."
- **pageInstructions:** "When the page loads, instruct the assistant on what actions to take."
- **capabilities:** An array of objects where each object includes:
  - **name:** "executeCells"
  - **description:** "Executes specified cells in the grid."
  - **async call({ gridId, cells }):** A function that processes the cells and returns the results.

These objects define what the user sees and how the app behaves on each route.

---

## Best Practices for Creating Configs

- **Modularity:**  
  Keep each configuration file focused on a single domain or service. For example, one config file can handle IP tools while another manages 3D programming tools.
- **Clarity:**  
  Clearly document the purpose of each field within your config. This makes maintenance easier and helps onboard new developers.
- **Environment Variables:**  
  Leverage environment variables to manage sensitive data and environment‑specific settings.
- **Testing:**  
  After updating your configuration files, thoroughly test the routes and functionality to ensure that the correct components load and that all dynamic URLs are generated properly.
- **Consistency:**  
  Ensure that shared components (headers, footers, themes) are consistent across all configuration files so that global updates propagate to all apps automatically.

---

## Conclusion

Your configuration files are the blueprint for your Imperium‑powered application. By defining settings for routes, headers, footers, themes, and stores in each config file, you gain full control over the appearance and behavior of your app—all while sharing a single, compiled codebase. This approach simplifies maintenance, enables efficient SSO, and makes global updates seamless across all micro-apps.

Happy configuring, and enjoy building your customized multi-domain React application with Imperium! 🎉
