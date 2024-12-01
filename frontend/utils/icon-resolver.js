import { html } from "lit";
const resolveLionIcon = (iconset) => {
    switch (iconset) {
    case "user":
        return html`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.1 0 3.75-1.65 3.75-3.75S14.1 4.5 12 4.5s-3.75 1.65-3.75 3.75S9.9 12 12 12zM4.5 17.25c0-1.6 1.2-3.05 2.93-3.46A7.467 7.467 0 0 1 12 14c2.5 0 4.67 1.03 6.57 2.8 1.73.41 2.93 1.86 2.93 3.46" />
        </svg>
      `;
  
    case "space":
        return html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12h3l3-3m-3 3l-3 3m-3 3H9l-3 3m3-3l3-3" />
        </svg>`;
    default:
        throw new Error(`Unknown iconset: ${iconset}`);
    }
};

export { resolveLionIcon };
