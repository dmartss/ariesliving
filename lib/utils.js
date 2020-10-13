export const isInDOM = obj => Boolean(obj.closest('body'))

export const hasParent = (element, root) => root.contains(element) && isInDOM(element)
