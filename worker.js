export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    let site = u.hostname.startsWith('training.') ? '/booking' : '/followup';
    let p = u.pathname;
    if (!u.hostname.startsWith('training.') && (p === '/course' || p.startsWith('/course/'))) {
      site = '/followup-course';
      p = p.slice('/course'.length) || '/';
    }
    u.pathname = site + (p === '/' ? '/index.html' : p);
    const res = await env.ASSETS.fetch(new Request(u.toString(), request));
    return res;
  }
};
