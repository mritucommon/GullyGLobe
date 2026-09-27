import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const iconRoot = join(root, 'node_modules', 'lucide-static', 'icons');

const icons = [
  'badge-check',
  'camera',
  'circle-alert',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle-user',
  'heart',
  'home',
  'leaf',
  'map-pin',
  'mail',
  'menu',
  'message-circle',
  'minus',
  'package',
  'sliders-horizontal',
  'plus',
  'layout-grid',
  'search',
  'shopping-bag',
  'shopping-basket',
  'shopping-cart',
  'star',
  'trash-2',
  'truck',
  'undo',
  'x'
];

function normalize(svg) {
  return svg
    .replace(/<!--[\s\S]*?-->\s*/g, '')
    .replace(/<svg[^>]*>/, '<svg class="icon icon-{{ icon_name }}" aria-hidden="true" focusable="false" viewBox="0 0 24 24">')
    .replace('</svg>', '</svg>')
    .trim();
}

const cases = icons.map((name) => {
  const svg = normalize(readFileSync(join(iconRoot, `${name}.svg`), 'utf8'));

  return `  {% when '${name}' %}
    ${svg.replaceAll('\n', '\n    ')}`;
});

const output = `{% doc %}
Renders a Lucide icon from the theme icon library.
@param {string} name - Icon name
@example
{% render 'icon', name: 'search' %}
{% enddoc %}

{% liquid
  assign icon_name = name | default: 'circle-alert'
%}

{% case icon_name %}
${cases.join('\n')}
  {% else %}
    ${normalize(readFileSync(join(iconRoot, 'circle-alert.svg'), 'utf8').replaceAll('\n', '\n    '))}
{% endcase %}
`;

writeFileSync(join(root, 'snippets', 'icon.liquid'), output);
