const editor = new EditorJS({
  holder: "editorjs",
  minHeight: 100,
  tools: {
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    header: {
      class: Header,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    image: {
      class: SimpleImage,
      inlineToolbar: true,
    },
  },
  data: {
    blocks: [
      {
        type: "paragraph",
        data: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at eius minima officiis veniam accusamus quidem optio aliquam reiciendis nisi?",
        },
      },
      {
        type: "image",
        data: {
          url: "https://picsum.photos/400",
          caption: "Изображение",
        },
      },
    ],
  },
});

const saveBtn = document.querySelector("#saveData");
const clearBtn = document.querySelector("#clearData");

saveBtn.addEventListener("click", () => {
  editor
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

clearBtn.addEventListener("click", () => {
    editor.clear();
})