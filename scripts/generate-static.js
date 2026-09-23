import fs from "node:fs";
import path from "node:path";

async function main() {
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  const basePath = isGitHubActions ? "/riana-admission-guide/" : "/";

  const distDir = path.resolve("dist");
  const outputPublicDir = path.resolve(".output/public");
  const publicDir = path.resolve("public");

  fs.mkdirSync(distDir, { recursive: true });

  if (fs.existsSync(outputPublicDir)) {
    fs.cpSync(outputPublicDir, distDir, { recursive: true });
  }

  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, distDir, { recursive: true });
    if (fs.existsSync(outputPublicDir)) {
      fs.cpSync(publicDir, outputPublicDir, { recursive: true });
    }
  }

  let htmlContent = "";

  // 1. Try to fetch from local running dev server if available
  try {
    const res = await fetch(`http://localhost:3000${basePath}`, {
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      htmlContent = await res.text();
      console.log(`Fetched fresh HTML from server (${htmlContent.length} bytes)`);
    }
  } catch {
    // server not running or unreachable
  }

  // 2. Fallback to saved prerender template
  if (!htmlContent) {
    const templatePath = path.resolve("scripts/template.html");
    if (fs.existsSync(templatePath)) {
      htmlContent = fs.readFileSync(templatePath, "utf8");
      console.log(`Loaded fallback template (${htmlContent.length} bytes)`);
    }
  }

  // 3. Final fallback: find newest JS and CSS in assets
  if (!htmlContent) {
    const assetsDir = path.join(distDir, "assets");
    let cssFile = "";
    let jsFile = "";
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      cssFile = files.find((f) => f.endsWith(".css")) || "";
      jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
    }
    htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Riana Admissions</title>
  ${cssFile ? `<link rel="stylesheet" href="${basePath}assets/${cssFile}">` : ""}
</head>
<body>
  <div id="root"></div>
  ${jsFile ? `<script type="module" src="${basePath}assets/${jsFile}"></script>` : ""}
</body>
</html>`;
  }

  // Adjust asset paths if deploying to a subpath like GitHub Pages
  if (basePath !== "/") {
    htmlContent = htmlContent
      .replaceAll('href="/assets/', `href="${basePath}assets/`)
      .replaceAll('src="/assets/', `src="${basePath}assets/`)
      .replaceAll('href="/photos/', `href="${basePath}photos/`)
      .replaceAll('src="/photos/', `src="${basePath}photos/`)
      .replaceAll('href="/@', `href="${basePath}@`)
      .replaceAll('src="/@', `src="${basePath}@`);
  }

  fs.writeFileSync(path.join(distDir, "index.html"), htmlContent, "utf8");
  fs.writeFileSync(path.join(distDir, "404.html"), htmlContent, "utf8");

  if (fs.existsSync(outputPublicDir)) {
    fs.writeFileSync(path.join(outputPublicDir, "index.html"), htmlContent, "utf8");
    fs.writeFileSync(path.join(outputPublicDir, "404.html"), htmlContent, "utf8");
  }

  console.log(`Successfully generated dist/index.html and dist/404.html`);
  console.log(`Build artifacts successfully populated in ${distDir}`);
}

main().catch((err) => {
  console.error("Error in generate-static.js:", err);
  process.exit(1);
});
