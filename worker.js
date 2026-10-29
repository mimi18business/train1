export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    const site = u.hostname.startsWith('training.') ? '/booking' : u.hostname.startsWith('trainpro.') ? '/trainpro' : '/followup';
    u.pathname = site + (u.pathname === '/' ? '/index.html' : u.pathname);
    const res = await env.ASSETS.fetch(new Request(u.toString(), request));
    return res;
  }
};
