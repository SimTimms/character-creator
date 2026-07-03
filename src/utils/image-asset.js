const imageModules = import.meta.glob('../images/**/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

export function getImageAsset(relativePath) {
  const modulePath = `../images/${relativePath}`;
  return imageModules[modulePath] || '';
}
