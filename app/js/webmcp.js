/* Experimental browser integration. No polyfill, backend, or API key needed. */
(() => {
  const status = document.getElementById("webmcp-status");
  let controller;
  let registered = [];
  let activeContext;
  let generation = 0;

  function cleanup() {
    generation++;
    controller?.abort(); // Current WebMCP draft: AbortSignal owns registration.
    if (activeContext === navigator.modelContext && typeof activeContext?.unregisterTool === "function") {
      for (const name of registered) {
        try { activeContext.unregisterTool(name); } catch (_) { /* Already removed. */ }
      }
    }
    registered = [];
  }

  async function register() {
    cleanup();
    const currentGeneration = generation;
    activeContext = typeof document.modelContext?.registerTool === "function" ? document.modelContext : navigator.modelContext;
    if (typeof activeContext?.registerTool !== "function") {
      status.textContent = "WebMCP is not available in this browser. You can still preview drafts below or build your plan manually.";
      return;
    }
    if (!getActiveStudent()) return;
    controller = new AbortController();
    status.textContent = "Connecting scheduling tools…";
    try {
      for (const tool of ScheduleTools.tools) {
        await activeContext.registerTool(tool, { signal: controller.signal });
        if (generation !== currentGeneration) return;
        registered.push(tool.name);
      }
      status.textContent = `${registered.length} WebMCP tools ready for a compatible browser assistant. Changes appear in your plan immediately.`;
    } catch (error) {
      if (generation !== currentGeneration) return;
      cleanup();
      status.textContent = "WebMCP tools could not be registered. Manual planning and draft previews still work.";
      console.warn("Schedule WebMCP registration failed:", error);
    }
  }

  window.addEventListener("pagehide", cleanup);
  window.addEventListener("pageshow", event => { if (event.persisted) register(); });
  register();

})();
