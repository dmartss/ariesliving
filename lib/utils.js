export const isInDOM = obj => Boolean(obj.closest('body'))

export const hasParent = (element, root) => root.contains(element) && isInDOM(element)

export const getSlug = slug => (slug ? (slug?.length > 1 ? slug[0] : slug?.toString()) : null)
