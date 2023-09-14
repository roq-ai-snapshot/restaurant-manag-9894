interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menu items', 'Place orders', 'Read reviews'],
  ownerAbilities: [
    'Manage users',
    'Manage restaurants',
    'Manage menus',
    'Manage orders',
    'Manage reviews',
    'Manage tables',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4605361e-0713-437e-891f-38c8368d103b',
};
