import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import styles from "./tinyMCE.module.scss";

function TinyMCE() {
  // const [data, setData] = useState("");

  const editorRef = useRef(null);

  // const addDataToState = () => {
  //   if (editorRef.current) {
  //     setData(editorRef.current.getContent());
  //   }
  // };

  return (
    <>
      <Editor
        apiKey="pkmc319wvtfjh2uonrenejyw1st2syxxwi1hchkr10855q1g"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        // onEditorChange={addDataToState}
      />
      {/* {data && <div dangerouslySetInnerHTML={{ __html: data }} />} */}
    </>
  );
}

export default TinyMCE;
