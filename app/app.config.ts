const footerLinks = [
  {
    title: 'Features',
    links: [
      { link: '', label: 'Cool stuff' },
      { link: '', label: 'Random feature' },
      { link: '', label: 'Team feature' },
      { link: '', label: 'Stuff for developers' },
      { link: '', label: 'Another one' },
      { link: '', label: 'Last time' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { link: '', label: 'Resource' },
      { link: '', label: 'Resource name' },
      { link: '', label: 'Another resource' },
      { link: '', label: 'Final resource' },
    ]
  },
  {
    title: 'About',
    links: [
      { link: '', label: 'Team' },
      { link: '', label: 'Locations' },
      { link: '', label: 'Privacy' },
      { link: '', label: 'Terms' },
    ]
  },
]

const footer = {
  title: 'Copyright © 2018',
  links: footerLinks,
}

const header = {
  title: 'Angular Seed Pricing',
  links: [
    { label: 'Home', icon: 'fa fa-home', link: ['/', 'home'] },
    { label: 'Pricing', icon: 'fa fa-btc', link: ['/', 'pricing'] },
    { label: 'About', icon: 'fa fa-info', link: ['/', 'about'] },
  ],
}

export const uiConfig = {
  header,
  footer,
  fluid: false,
}