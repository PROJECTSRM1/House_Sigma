export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Add useTranslation import if missing
  const hasUseTranslation = root
    .find(j.ImportDeclaration)
    .some(p => p.node.source.value === "react-i18next");

  if (!hasUseTranslation) {
    root.find(j.ImportDeclaration).at(0).insertAfter(
      j.importDeclaration(
        [j.importSpecifier(j.identifier("useTranslation"))],
        j.literal("react-i18next")
      )
    );
  }

  // Find function components
  root.find(j.FunctionDeclaration).forEach(path => {
    const body = path.node.body.body;

    const alreadyHasT = body.some(
      n =>
        n.type === "VariableDeclaration" &&
        n.declarations.some(d => d.id.name === "t")
    );

    if (!alreadyHasT) {
      body.unshift(
        j.variableDeclaration("const", [
          j.variableDeclarator(
            j.objectPattern([j.property("init", j.identifier("t"), j.identifier("t"))]),
            j.callExpression(j.identifier("useTranslation"), [])
          )
        ])
      );
    }
  });

  // Replace JSX text
  root.find(j.JSXText).forEach(path => {
    const text = path.node.value.trim();
    if (!text || text.length < 2) return;

    const key = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");

    j(path).replaceWith(
      j.jsxExpressionContainer(
        j.callExpression(j.identifier("t"), [j.literal(key)])
      )
    );
  });

  return root.toSource();
}
