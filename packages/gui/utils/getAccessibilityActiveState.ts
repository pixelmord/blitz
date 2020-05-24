export const getAccessibilityActiveState = (active: boolean) => ({
  'data-active': active,
  'aria-current': active ? 'page' : undefined,
})
