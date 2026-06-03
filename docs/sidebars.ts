import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/theming',
        'getting-started/usage',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/avatar',
        'components/badge',
        'components/button',
        'components/checkbox',
        'components/dialog',
        'components/dropdown-menu',
        'components/input',
        'components/label',
        'components/select',
        'components/separator',
        'components/sheet',
        'components/tabs',
        'components/textarea',
        'components/toast',
        'components/tooltip',
      ],
    },
  ],
};

export default sidebars;
