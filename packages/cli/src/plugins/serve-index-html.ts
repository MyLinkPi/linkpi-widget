import { PluginOption } from "vite";

export const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://test-inner-oss.linkerpi.com/storage/87718d26bace4ee9b938fd5b244f825e.ico?OSSAccessKeyId=LTAI4GJJjJfFS4KtHxuFw5tZ&Expires=4936449694&Signature=NFAys7xvsbcIq4HEv%2BGKGyFYKpo%3D" type="image/x-icon">
  <title>自定义组件预览</title>
</head>

<body>
  <div id="app">blank</div>
  <script type="module">
    import RefreshRuntime from "/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => { }
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>
  <script type="module" src="/@/main.tsx"></script>
</body>

</html>
`;

export function serveIndexHtml(): PluginOption {
  return {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/") {
          res.end(htmlContent);
        } else {
          next();
        }
      });
    },
    name: "serve-index-html",
  };
}
