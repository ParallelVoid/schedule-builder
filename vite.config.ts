import { sites } from '@openai/sites-vite-plugin';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import vinext from 'vinext';
import { defineConfig, type Plugin } from 'vite';
import hostingConfig from './.openai/hosting.json';

const { d1, r2 } = hostingConfig;
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

const localBindingConfig = {
  main: 'vinext/server/fetch-handler',
  compatibility_flags: ['nodejs_compat'],
  d1_databases: d1 ? [] : [],
  r2_buckets: r2 ? [] : [],
};

const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

function termwiseStaticDev(): Plugin {
  const staticRoot = resolve('app');
  return {
    name: 'termwise-static-dev',
    apply: 'serve',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const pathname = new URL(
          request.url ?? '/',
          'http://localhost',
        ).pathname;
        const assetPath = pathname === '/' ? '/index.html' : pathname;
        if (!/^\/(?:[^/]+\.html|css\/|js\/)/.test(assetPath)) return next();

        const filePath = resolve(staticRoot, `.${assetPath}`);
        if (!filePath.startsWith(`${staticRoot}${sep}`)) return next();
        try {
          const body = await readFile(filePath);
          response.statusCode = 200;
          response.setHeader(
            'content-type',
            contentTypes[extname(filePath)] ?? 'application/octet-stream',
          );
          response.end(body);
        } catch {
          next();
        }
      });
    },
  };
}

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= 'false';
  process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
  process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';

  const { cloudflare } = await import('@cloudflare/vite-plugin');

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      termwiseStaticDev(),
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
        config: localBindingConfig,
      }),
    ],
  };
});
