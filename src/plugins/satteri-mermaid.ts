import { defineHastPlugin } from "satteri";

export const satteriMermaid = defineHastPlugin({
  name: "mermaid",
  element: {
    filter: ["pre"],
    visit(node, ctx) {
      const codeChild = node.children?.find(
        (c) => c.type === "element" && (c as any).tagName === "code",
      );
      if (!codeChild || codeChild.type !== "element") return;
      const lang = (codeChild as any).data?.lang;
      if (lang === "mermaid") {
        const text = ctx.textContent(codeChild);
        ctx.replaceNode(node, {
          type: "element",
          tagName: "div",
          properties: { className: ["mermaid"] },
          children: [{ type: "text", value: text }],
        } as any);
      }
    },
  },
});
