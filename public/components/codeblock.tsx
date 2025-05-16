"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "Typescript" }: Props) {
  return (
    <div className="rounded-md overflow-auto text-sm my-4 max-h-64 shadow-lg">
      <SyntaxHighlighter language={language} style={dracula} wrapLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
