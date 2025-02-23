# Create Imperium App 🚀

Welcome to **Create Imperium App** – your all-in-one starter template for building cutting‑edge, multi‑domain React applications using the Imperium framework by Leumas Tech! This template is designed to get you up and running fast with a clean, minimal, and highly customizable project structure. 😎

---

## Overview

Create Imperium App bundles the core Imperium logic into a ready-to-use project scaffold. It separates the underlying Imperium core from your custom application code and configuration settings so you can focus on building amazing features without worrying about internal implementation details. When you generate a new project using this template, you'll receive a solid foundation with dedicated folders for:

- **Core:** Contains the Imperium logic and pre‑configured App component that acts as your application engine.
- **Config:** The place where you define and adjust your project’s default configurations.
- **Global:** Houses global settings that affect your entire application.
- **Source (src):** Your custom application code and entry point.

This structure is designed for flexibility, maintainability, and scalability.

---

## Key Features ✨

- **Compiled Imperium Logic:** Enjoy a fully compiled version of the Imperium framework that is integrated seamlessly into your project while keeping all internal code hidden.
- **Seamless Customization:** Easily supply your own configuration and global settings, so you can tailor the app exactly to your needs.
- **Modern Tooling:** Built with Vite and React for a lightning‑fast development experience and smooth build process.
- **Modular & Extensible:** A clear separation of core logic, configuration, and global settings makes it simple to extend and maintain your project over time.
- **Instant Project Generation:** Ready for NPX – generate your new project instantly with an NPX command and start building right away.

---

## How to Get Started

1. **Generate Your Project:**  
   Use NPX or a similar tool to clone this template and set up your new Imperium app. This step downloads the pre‑configured project scaffold to your local machine.

2. **Install Dependencies:**  
   After generating the project, navigate to your project folder and install all dependencies with your preferred package manager.

3. **Customize Configurations:**  
   Open the **config** and **global** folders to update the default settings (e.g., API keys, routes, endpoints, and other options) to match your application requirements.

4. **Run and Build Your App:**  
   Use the provided scripts to start the development server, test your app, or build the project for production deployment.

With this template, you’re fully equipped to launch your Imperium‑powered React application in no time!

---

## Detailed Folder Structure

- **core/**  
  Contains the pre‑configured App component that wraps the Imperium logic. This core engine is the heart of your application and remains separate from your custom code.

- **config/**  
  Holds default configuration files that you can modify. Here you define routes, API endpoints, and other settings to personalize your project.

- **global/**  
  Contains global configuration settings that apply across your entire application. Adjust these to control overall behaviors and integrations.

- **src/**  
  Your main application code lives here, including the entry point (typically `main.jsx`), where you import the core App component and inject your configurations.

- **index.html**  
  The HTML template that provides the mounting point for your React application. It is the base of your project’s frontend.

- **Package and Build Files**  
  Files such as `package.json` and `vite.config.js` manage dependencies, scripts, and the build process, ensuring smooth development and deployment.

---

## Customization & Configuration

Create Imperium App is designed for maximum flexibility:

- **Define Routes:** Configure your public, protected, and shared routes to suit your project’s navigation and security needs.
- **Set API Endpoints:** Easily specify your own API endpoints and service URLs.
- **Adjust Global Settings:** Override default global settings to better align with your project requirements.
- **Extend Components:** As your project evolves, you can extend or override core components without altering the underlying Imperium logic.

The modular design ensures that while the core Imperium framework remains stable, every aspect of the application behavior can be fully tailored by you.

---

### Imperium Configurations Documentation 🎛️

Welcome to the Imperium Configurations Documentation! This guide is designed to help you understand, create, and customize configuration files for your Imperium‑powered applications. Each configuration file you create is like a dedicated router that tells your application which pages, components, and behaviors to use. This system enables you to build multiple, distinct apps—such as microservices or specialized admin portals—all from a single shared build folder.

---

## Who Should Read This? 👥

This documentation is intended for:

- **Entrepreneurs and Business Owners** who need to manage multiple applications, dashboards, or employee portals.
- **Developers and DevOps Teams** building and maintaining microservices or custom React apps.
- **Technical Leads** responsible for integrating SSO and ensuring consistent updates across a suite of applications.

---

## Overview of Imperium Configs 🚀

Imperium uses configuration files to determine how your application behaves at runtime. When the core **App** component is loaded (from your single build/dist folder), it examines the current URL or subdomain and selects the appropriate config file. This means:

- **Multi-Domain SSO:** Logging into one Leumas app logs you into all Leumas apps in the browser.
- **Shared Build, Unique Behavior:** A single build folder can support multiple apps—each styled and functional in its own way. For example, if a user visits `https://bulkforge.leumas.tech`, the configuration for BulkForge is loaded; if they visit `https://podgpt.leumas.tech`, the PodGPT config is used.
- **Centralized Updates:** Updates to shared components, themes, or logic are applied across all apps instantly, making maintenance a breeze.

---

## Detailed Breakdown of Configuration Fields

Each configuration file is a JavaScript module that exports a function. This function receives parameters (like `baseApiUrl` and `trackingApiKey`) and returns an object with the following keys:

### 1. **appName**

- **What It Is:**  
  A unique identifier for your application (e.g., "ip.leumas.tech" or "programming.leumas.tech").
- **Why It Matters:**  
  Used for display, routing logic, and internal state management.

### 2. **theme**

- **What It Is:**  
  A setting that defines the visual style of your application.
- **Why It Matters:**  
  Changing the theme can affect colors, fonts, and overall layout, allowing different apps to share a common structure while having unique looks.

### 3. **baseApiUrl**

- **What It Is:**  
  The root URL for API calls.
- **Why It Matters:**  
  It constructs dynamic URLs for header links, footer links, and other endpoints. Changing this value lets you point your app to different backends or environments.

### 4. **Header Configuration**

- **Key Properties:**
  - **component:**  
    The React component that renders the header.
  - **headerLinksUrl:**  
    A URL that provides additional header configuration data.
  - **megaMenuUrl:**  
    (Optional) A URL to load a mega menu.
  - **Additional Props:**  
    You can pass functions (e.g., sign-out handlers) or other custom props.
- **Customization:**  
  By default, the global header configuration is used. However, if your app’s config specifies its own header, it will override the global version—allowing each app to have its own header style and behavior.

### 5. **Footer Configuration**

- **Key Properties:**
  - **component:**  
    The React component that renders the footer.
  - **footerLinksUrl:**  
    A URL for additional footer data.
  - **socialsUrl:**  
    A URL for social media links.
- **Customization:**  
  Like the header, the footer can be globally set but overridden by app-specific settings if provided.

### 6. **Routes**

Routes are the heart of your application configuration. They define how your app navigates between pages and which components are rendered for each path. Routes are divided into three groups:

- **publicRoutes:**  
  Routes that are accessible without any authentication.
- **protectedRoutes:**  
  Routes that require the user to be authenticated. These objects can include:
  - **path:** The URL path (e.g., `/ipapi`).
  - **component:** The React component that serves as the landing page.
  - **pageName:** A human‑readable name for the page.
  - **description:** A brief explanation of the page’s purpose.
  - **pageInstructions:** Instructions for the assistant or guidance on what the page does.
  - **capabilities:** An array of objects that define extra features for the page (see next section).
- **sharedRoutes:**  
  Routes that are shared across the entire application, typically used for common functions or features.

#### Capabilities

Capabilities are additional functions that a route may support. They let you define custom behavior that can be invoked (for example, by the built‑in Leviathan component). Each capability is an object with the following structure:

- **name:** A unique identifier for the capability.
- **description:** A brief description of what the capability does.
- **async call({ ... }):**  
  An asynchronous function that takes parameters (such as grid ID or cells) and returns results. This is where you define custom logic (e.g., executing cells in a 3D grid) without altering the core logic.

### 7. **Components**

- **What It Is:**  
  An optional section to register custom components that you want applied globally. For example, shared UI elements like sidebars or speed-dial menus.
- **Why It Matters:**  
  This allows you to update or override components across all routes from one central configuration.

### 8. **Stores**

Stores let you define configurations for various integrated services. They are grouped into arrays:

- **leumasStores**
- **printifyStores**
- **shopifyStores**
- **Why It Matters:**  
  This setup is ideal for managing microservices or ecommerce integrations, letting you easily switch or update configurations without changing the app’s core.

### 9. **apiKey**

- **What It Is:**  
  A key used for tracking or authentication throughout your app.
- **Why It Matters:**  
  Ensures secure communication with services and analytics.

---

## Environment Variables and Their Role

Your application relies on environment variables to select the appropriate configuration file and control various modes. Key variables include:

- **VITE_REACT_APP_STANDALONE_MODE:**  
  Set to `false` (or `true` for standalone mode).
- **VITE_REACT_APP_SELECTED_CONFIG:**  
  Specifies which configuration to load (e.g., `programming` or `bulkforge`).
- **VITE_REACT_APP_MODE:**  
  Determines the runtime environment (development, production, staging).
- **VITE_REACT_APP_SUBDOMAIN:**  
  Matches one of your config files; helps the app decide which configuration to use based on the URL.
- **VITE_REACT_APP_ADMIN_MODE:**  
  Enables admin functionality if set to `true`.

These environment variables ensure that when the app is built and deployed, it automatically picks the right configuration based on the URL and environment settings.

---

## How It All Comes Together 🔄

- **Single Build, Multiple Behaviors:**  
  When you build your Imperium app, you get one compiled build (in the **dist** folder). The **App** component uses the current URL (or subdomain) and environment variables to load the corresponding configuration file. This means you can have two apps—styled identically or completely differently—served from one build.
- **Shared Providers and SSO:**  
  All routes share the same providers, contexts, and components. This uniformity makes it ideal for Single Sign-On (SSO), where logging into one Leumas app logs you into all of them.
- **Microservices and Custom Dashboards:**  
  This design is perfect for managing multiple microservices or creating specialized admin portals (e.g., marketing dashboards, ecommerce management, etc.), all within a unified framework.

---

## Creating a New Config File

To create your own configuration file:

1. **Duplicate an Example:**  
   Start by copying an existing config file (such as `ip.leumas.tech.jsx` or `gallery.leumas.tech.jsx`).
2. **Customize the Fields:**  
   - Update **appName** to your desired domain.
   - Choose or define a **theme**.
   - Set the **baseApiUrl** to your API endpoint.
   - Modify the **header** and **footer** sections (change the components or URL endpoints as needed).
   - Define **routes** for public, protected, and shared areas. Include route-specific properties such as **pageName**, **description**, **pageInstructions**, and **capabilities**.
   - Register any custom **components** or **stores** required by your app.
   - Set the **apiKey** for tracking/authentication.
3. **Test and Iterate:**  
   Integrate the new config file into your application and test that the correct routes, components, and behaviors are rendered.

---

## Sample Route Object Explanation

Imagine a route object defined for a protected route:

- **path:** `/3d-prog`
- **component:** A React component that renders the 3D programming page.
- **pageName:** "3D Prog"
- **description:** "This page handles 3D programming interactions."
- **pageInstructions:** "Instruct the assistant on what actions to perform when the page loads."
- **capabilities:**  
  For example, a capability named "executeCells" that defines an async function to process grid cells. When triggered, this function receives parameters like grid ID and cells, performs the necessary logic, and returns the results.

Each route object is an instruction for the router to render a specific page with specific functionalities. By grouping routes under public, protected, and shared arrays, you control access and shared behavior across your application.

---

## Final Thoughts and Best Practices

- **Modular Configurations:**  
  Keep each config file focused on a specific domain or service for clarity and maintainability.
- **Environment Driven:**  
  Leverage environment variables to switch between configurations without changing your code.
- **Unified Look and Feel:**  
  Use global configurations for headers, footers, and shared components, but allow individual apps to override these settings as needed.
- **Test Thoroughly:**  
 

## Useful Links & Resources 🔗

- **Leumas Tech GitHub:** [Leumas-Tech/leumas-imperium](https://github.com/Leumas-Tech/leumas-imperium)
- **Leumas Tech Website:** [Leumas Tech](https://leumas.tech)
- **Leumas Tech Logo:**  
  ![Leumas Tech Logo](https://res.cloudinary.com/dx25lltre/image/upload/v1707175639/Leumas/LEUMAS_Tech_Logo_500x500_bvg8wu.png)
- **Leumas Tech Icon:**  
  ![Leumas Tech Icon](https://res.cloudinary.com/dx25lltre/image/upload/v1707176122/Leumas/2_t6ap9y.svg)

---

## Contributing

We love collaboration! If you have ideas for improvements, find bugs, or wish to contribute new features, please open an issue or submit a pull request. Before contributing, review our contribution guidelines to ensure a smooth and respectful collaboration process. Your efforts help make Create Imperium App even better for everyone. 💡

---

## Additional Information

- **Project Generation:**  
  This template is designed to be used with NPX for quick project generation. It’s intended to streamline the setup process so that you can focus on development rather than configuration.
  
- **Development & Deployment:**  
  The project uses Vite for its development server and build process. This ensures fast feedback during development and optimized builds for production.
  
- **Customization Roadmap:**  
  As the template evolves, we plan to add more detailed configuration options, automated testing setups, and further integration with CI/CD pipelines. Stay tuned for updates!

---

## License

This project is licensed under the MIT License. For full details, please see the LICENSE file included in the repository.

---

Happy coding and welcome to the future of multi‑domain React applications with Imperium! 🎉
