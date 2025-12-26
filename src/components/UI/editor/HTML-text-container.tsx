'use client';

export default function HTMLTextContainer({content}:{content:string}) {
  return (
    <div
      className="prose max-w-none text-secondary ${font_default.className} text-lg lg:text-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
