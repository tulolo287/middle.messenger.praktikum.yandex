export function render(query: string, block: any) {
  const root = document.querySelector(query);
  if (root) {
    root.replaceChildren(block.getContent());
  }
  return root;
}
