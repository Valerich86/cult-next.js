import Link from "next/link";
import BigtextContainer from "./bigtext-container";

function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

export function FormatTextWithLinks({ text }: { text: string }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part) && isValidUrl(part)) {
      // Извлекаем домен для отображения (опционально)
      const domain =
        part.startsWith("https://localhost") ||
        part.startsWith("https://cult-next-js")
          ? part
          : new URL(part).hostname.replace("https://", "");

      return (
        <Link
          key={index}
          href={part}
          target="_blank"
          rel="noopenerer noreferrer"
          className="inline-flex items-center gap-2 text-peachy1 underline group"
        >
          <span>{domain}</span>
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </Link>
      );
    }
    return <BigtextContainer key={index} text={part} />;
  });
}
