import Block from './Block.ts';

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }
  // root.innerHTML = '';

  // root.append(block.getContent()!);
  if (root) {
    root.replaceChildren(block.getContent()!);
  }
  return root;
}
