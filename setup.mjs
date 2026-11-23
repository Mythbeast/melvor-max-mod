// setup.mjs -- Max mod
export async function setup(ctx) {

  const sidebarM = await ctx.loadModule('modules/core/sidebar.mjs');

   ctx.onCharacterLoaded(() => {
    sidebarM.initSidebar();
  });
}
