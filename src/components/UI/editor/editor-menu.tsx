'use client';

import type { Editor } from '@tiptap/react';

interface EditorMenuProps {
  editor: Editor | null;
}

export default function EditorMenu({ editor }: EditorMenuProps) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b border-gray-200">
      {/* Группа форматирования текста */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${editor.isActive('bold')
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <span className="font-bold">Ж</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${editor.isActive('italic')
              ? 'bg-blue-100 text-blue-700 italic'
              : 'text-gray-600 hover:bg-gray-100 italic'}`}
        >
          <em>К</em>
        </button>
      </div>

      {/* Списки */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-2 rounded-md text-sm transition-colors
          ${editor.isActive('bulletList')
            ? 'bg-blue-100 text-blue-700'
            : 'text-gray-600 hover:bg-gray-100'}`}
      >
        •
      </button>

      {/* Ссылки */}
      <button
        type="button"
        onClick={() => {
          const url = prompt('Введите URL:');
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        className="px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
      >
        🔗 Ссылка
      </button>

      {/* Изображения */}
      <button
        type="button"
        onClick={() => {
          const src = prompt('Введите URL изображения:');
          if (src) editor.commands.insertContent({
            type: 'image',
            attrs: { src },
          });
        }}
        className="px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
      >
        📷 Изображение
      </button>

      {/* Отмена/Повтор */}
      <div className="flex gap-2 ml-auto">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="px-3 py-2 rounded-md text-sm text-gray-400 hover:text-gray-600 disabled:opacity-50"
        >
          ↩️ Отменить
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="px-3 py-2 rounded-md text-sm text-gray-400 hover:text-gray-600 disabled:opacity-50"
        >
          ↪ Повторить
        </button>
      </div>
    </div>
  );
}
