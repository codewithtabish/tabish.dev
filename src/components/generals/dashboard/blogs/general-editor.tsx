"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

type GeneralEditorProps = {
  blog?: { slug?: string; content?: any };
  onChange?: (data: any) => void;
};

const GeneralEditor: React.FC<GeneralEditorProps> = ({
  blog,
  onChange,
}) => {
  const editorRef = useRef<any>(null);
  const holderRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initEditor = async () => {
      if (editorRef.current || !holderRef.current) return;
      const Header = (await import("@editorjs/header")).default;
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Quote = (await import("@editorjs/quote")).default;
      const Warning = (await import("@editorjs/warning")).default;
      // const Delimiter = (await import("@editorjs/delimiter")).default;
      const Delimiter = (await import("@coolbytes/editorjs-delimiter")).default;
      const Title = (await import("title-editorjs")).default;
      const ColorPicker = (await import("editorjs-color-picker")).default;
      const TextStyleTool = (await import("@skchawala/editorjs-text-style")).default;
      const EditorjsList  = (await import("@editorjs/list")).default;
      const NestedList  = (await import("@calumk/editorjs-nested-checklist")).default;
      const ImageTool = (await import("@editorjs/image")).default;
      const LinkTool  = (await import("@editorjs/link")).default;
      const AttachesTool   = (await import("@editorjs/attaches")).default;
       const MermaidTool = (await import("editorjs-mermaid")).default;
       const CodeTool = (await import("@editorjs/code")).default;
       const RawTool = (await import("@editorjs/raw")).default;
       const Annotation  = (await import("editorjs-annotation")).default;
       const Strikethrough   = (await import("@sotaproject/strikethrough")).default;
       const Spoiler    = (await import("@iizotikov/editor-js-tg-spoiler")).default;
       const TextVariantTune    = (await import("@editorjs/text-variant-tune")).default;
       const InlineTemplate    = (await import("editorjs-inline-template")).default;
       const AlignmentTune     = (await import("editor-js-alignment-tune")).default;
       const Marker     = (await import("@editorjs/marker")).default;
       const InlineCode      = (await import("@editorjs/inline-code")).default;
       const GoogleMap       = (await import("editorjs-googlemap")).default;
      // const EditorjsList = (await import("@editorjs/list")).default;

      //  const TextVariantTune     = (await import("")).default;









      editorRef.current = new EditorJS({
        holder: holderRef.current,
        autofocus: true,
        placeholder: "Start writing here...",
        data: blog?.content ?? {},
        tools: {
          header: { class: Header as any, inlineToolbar: true , 
            config:{
              levels: [1,2, 3, 4,5,6],
               defaultLevel: 3
            }
           },

          textVariant: TextVariantTune,
           paragraph: { // apply only for the 'paragraph' tool
      tunes: ['textVariant'],
    },
     alignmentTune: {
          class: AlignmentTune as any
      },
      Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
     inlineCode: {
      class: InlineCode,
    },

          quote: Quote,
          title: Title,
           ColorPicker: {
      class: ColorPicker as any,
    },
     googleMap: {
      class: GoogleMap,
      inlineToolbar: true,
    },
    

           warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message',
      },
      
    },
      delimiter: {
      class: Delimiter,
      config: {
        styleOptions: ['star', 'dash', 'line'],
        defaultStyle: 'star',
        lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
        defaultLineWidth: 25,
        lineThicknessOptions: [1, 2, 3, 4, 5, 6],
        defaultLineThickness: 2,
      
      }
    },

     textStyle: {
      class: TextStyleTool,
      config: {
        fontSizeEnabled: true,
        fontFamilyEnabled: true,
        fontSizes: [
          { label: "12px", value: "12px" },
          { label: "14px", value: "14px" },
          { label: "16px", value: "16px" },
          { label: "18px", value: "18px" },
          { label: "20px", value: "20px" },
        ],
        fontFamilies: [
          { label: "Arial", value: "Arial" },
          { label: "Georgia", value: "Georgia" },
          { label: "Courier New", value: "Courier New" },
          { label: "Verdana", value: "Verdana" },
        ],
        defaultFontSize: "20px",
        defaultFontFamily: "Verdana",
      },
    },
    List: {
      class: EditorjsList,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      },
    },
      image: {
            class: ImageTool,
            config: {
              endpoints: { byFile: "/api/upload-file" },
              field: "file",
              types: "image/*",
            },
          },
           linkTool: {
      class: LinkTool,
      config: {
        endpoint: '/api/fetchurldata', // Your backend endpoint for url data fetching,
      }
    },
     attaches: {
      class: AttachesTool,
      config: {
        endpoint: '/api/upload-attachment'
      }
    },
    mermaid: { class: MermaidTool, config: { theme: "forest" } },
    code: CodeTool,
    list: { class: EditorjsList, inlineToolbar: true },

    // nestedchecklist : NestedList,
              raw: RawTool,
                  annotation: Annotation,
                  strikethrough: Strikethrough,
                      spoiler: Spoiler,
                   








        },
        onReady: () => {
          if (mounted) setIsReady(true);
        },
        onChange: async () => {
          if (editorRef.current) {
            const saved = await editorRef.current.save();
            onChange?.(saved);
          }
        },
          tunes: ['textVariant'],

      });
    };

    initEditor();

    return () => {
      mounted = false;
      if (editorRef.current && typeof editorRef.current.destroy === "function") {
        editorRef.current.destroy();
      }
      editorRef.current = null;
    };
  }, []); // ✅ Initialize only once

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={holderRef}
      className="border rounded p-2 min-h-[400px] max-w-6xl  "
    >
      {!isReady && <div className="text-sm text-muted-foreground dark:bg-gray-800">Loading editor…</div>}
    </div>
  );
};

export default dynamic(() => Promise.resolve(GeneralEditor), { ssr: false });
