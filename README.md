<img width="1746" height="1006" alt="image" src="https://github.com/user-attachments/assets/85bfbb33-0800-42b0-a8f6-f9f5f5b09437" />



<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Clipper-AI
>>>>>>> 3efe467ede11ceec201a1455453886ddb339f0d7
## Deployment Challenges

This project works successfully in a local development environment, where transcript extraction, AI-powered analysis, and clip generation function as expected. However, deploying the application to cloud platforms introduced several real-world engineering challenges.

### Challenges Encountered

* **Cloud Deployment Configuration:** Configuring backend services on platforms such as Railway required proper environment variable management, service routing, and application startup commands.
* **API Key Management:** Production deployments required secure handling of API keys and environment variables that were readily available in local development.
* **CORS Issues:** Communication between the frontend and backend required additional Cross-Origin Resource Sharing (CORS) configuration when deployed on separate domains.
* **YouTube Transcript Access Restrictions:** While transcript retrieval worked on the local machine, cloud-hosted environments encountered IP-based restrictions from YouTube. Some cloud provider IP ranges are blocked from accessing transcript data, causing requests to fail despite functioning correctly during local testing.
* **Environment Differences:** Differences between local and cloud environments highlighted challenges related to dependency management, network restrictions, and service integration.

### Current Status

The application is fully functional in a local environment and demonstrates the complete workflow:

1. Accept a YouTube video URL.
2. Retrieve video transcript data.
3. Analyze transcript content using Large Language Models (Groq).
4. Identify high-engagement clip opportunities.
5. Return timestamps and clip recommendations.

The deployment process remains an ongoing engineering challenge, providing valuable experience in cloud infrastructure, DevOps practices, API integration, and production-grade AI application deployment.
