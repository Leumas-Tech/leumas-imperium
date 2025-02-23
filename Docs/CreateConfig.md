# Imperium Configurations Guide

Welcome to the Imperium Configurations Guide! This document explains how to create and customize configuration files for your Imperium-based React applications. With these configuration files, you can tailor the behavior, appearance, and functionality of your app without modifying the core Imperium logic.

---

## Overview

In an Imperium project, configuration files are JavaScript modules that export a function. This function takes in parameters (such as a base API URL or tracking API key) and returns an object that defines various settings for your application. These settings control your app’s name, theme, header and footer components, routes, custom components, and store configurations. By separating these aspects into a dedicated config file, you can easily maintain and update your project without altering the internal core logic.

---

## Key Configuration Fields

Below is an explanation of the main parts you’ll define in your config files:

### **appName**

- **Purpose:**  
  Specifies the unique name of your application (for example, "ip.leumas.tech" or "programming.leumas.tech").  
- **Usage:**  
  This value is used for display purposes, routing logic, and sometimes in API calls to identify your application.

### **theme**

- **Purpose:**  
  Determines the theme or styling set to be applied across your application.  
- **Usage:**  
  The theme value might load specific CSS files or toggle certain layout components.

### **baseApiUrl**

- **Purpose:**  
  Defines the base URL for your API endpoints.  
- **Usage:**  
  Used to construct URLs for header links, footer links, and other dynamic endpoints throughout your configuration.

### **Header Configuration**

- **Purpose:**  
  Configures the header of your application.
- **Key Properties:**
  - **component:** The React component that renders your header.
  - **headerLinksUrl:** A URL that points to additional header configuration data.
  - **megaMenuUrl:** (Optional) A URL for a mega menu configuration.
  - **Additional Props:**  
    You can add functions such as a sign-out handler if needed.
- **Usage:**  
  These settings determine what appears in the header area of your app and how it behaves.

### **Footer Configuration**

- **Purpose:**  
  Configures the footer of your application.
- **Key Properties:**
  - **component:** The React component that renders your footer.
  - **footerLinksUrl:** A URL for additional footer links or configuration.
  - **socialsUrl:** A URL for social media links or icons.
- **Usage:**  
  These settings define the look and content of your application’s footer.

### **Routes**

- **Purpose:**  
  Define the navigation paths and associated components in your app.
- **Subfields:**
  - **publicRoutes:**  
    An array of route objects that can be accessed without authentication.
  - **protectedRoutes:**  
    An array of route objects that require user authentication.  
    Each route object may include:
    - **path:** The URL path.
    - **component:** The React component to render.
    - **pageName:** A human-readable name for the page.
    - **description:** (Optional) A brief description of the page.
    - **pageInstructions:** (Optional) Instructions to guide the user on the page.
    - **capabilities:** (Optional) An array of objects that define interactive features, including a name, description, and an asynchronous call function.
  - **sharedRoutes:**  
    Routes that are shared across various parts of your app.
- **Usage:**  
  The routes configuration directs the routing behavior of your application and determines which components render for specific URLs.

### **Components**

- **Purpose:**  
  Optionally, register custom components that the app can use.  
- **Usage:**  
  This field is useful when you want to override default components or add new ones that integrate with your app’s functionality.

### **Stores**

- **Purpose:**  
  Define configurations for various data stores your application may use.
- **Subfields:**
  - **leumasStores:**  
    An array of store configurations specific to Leumas services.
  - **printifyStores:**  
    An array of configurations for Printify.
  - **shopifyStores:**  
    An array of configurations for Shopify.
- **Usage:**  
  This section lets you register and configure different store types, making it easier to integrate multiple services into your app.

### **apiKey**

- **Purpose:**  
  Provides a tracking or authentication key that may be used throughout the app.
- **Usage:**  
  This key is often passed to analytics or other services that require authentication.

---

## Creating Your Own Configuration File

When building your application, you can create a configuration file by following these steps:

1. **Copy an Example:**  
   Start by duplicating an existing config file (for example, one like the `ip.leumas.tech.jsx` or `gallery.leumas.tech.jsx` examples). This gives you a baseline structure.

2. **Update the Fields:**  
   - Change the **appName** to match your domain or project name.
   - Select or define a **theme** that fits your project’s design.
   - Update the **baseApiUrl** to point to your own API endpoints.
   - Customize the **header** and **footer** settings by specifying the appropriate React components and URL endpoints.
   - Define your **routes** by listing the paths and components you want available in your application. For protected routes, include any extra properties such as descriptions, instructions, and capabilities.
   - Optionally, register any custom **components** or **stores** needed by your application.
   - Set the **apiKey** for tracking or authentication services.

3. **Dynamic Imports and Lazy Loading:**  
   If your configuration requires heavy components or you want to optimize performance, consider using dynamic imports (such as React.lazy) to load components on demand.

4. **Test Your Configuration:**  
   Once you have created your config file, integrate it into your app and test that all routes, components, and settings behave as expected. Make sure to verify that URL endpoints (like headerLinksUrl and footerLinksUrl) correctly reflect your intended API routes.

---

## Best Practices

- **Keep Configurations Modular:**  
  Separate your configuration into logical sections (such as header, footer, and routes) to make maintenance easier.
- **Use Environment Variables:**  
  For sensitive values like API keys, use environment variables to avoid hard-coding sensitive information.
- **Validate Your Settings:**  
  Test each part of your configuration to ensure that components render correctly and that routes behave as expected.
- **Document Changes:**  
  Keep notes on any customizations you make so that future updates to the core Imperium framework can be integrated with minimal disruption.

---

## Final Thoughts

Your configuration files are the blueprint of your Imperium-powered application. By adjusting settings in the **config**, **global**, and related sections, you gain complete control over the appearance and functionality of your app without needing to modify the underlying Imperium logic. Experiment, iterate, and make the configuration your own!

Happy configuring, and enjoy building your customized multi-domain React application with Imperium! 🎉
