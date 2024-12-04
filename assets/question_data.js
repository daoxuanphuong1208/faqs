const questions = [
  {
    id: 1,
    question: "How much does a new website cost?",
    answers: {
      title:
        "Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.",
      description: [
        "Mattis nunc sed blandit libero volutpat.",
        "Tortor at risus viverra adipiscing at in tellus.",
        "Purus ut faucibus pulvinar elementum.",
        "Blandit turpis cursus in hac habitasse.",
      ],
    },
  },
  {
    id: 2,
    question: "Do you only create WordPress websites?",
    answers: {
      title:
        "Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.",
      description: [
        "Mattis nunc sed blandit libero volutpat.",
        "Tortor at risus viverra adipiscing at in tellus.",
        "Purus ut faucibus pulvinar elementum.",
        "Blandit turpis cursus in hac habitasse.",
      ],
    },
  },
  {
    id: 3,
    question: "Will you maintain my site for me?",
    answers: {
      title:
        "Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.",
      description: [
        "Mattis nunc sed blandit libero volutpat.",
        "Tortor at risus viverra adipiscing at in tellus.",
        "Purus ut faucibus pulvinar elementum.",
        "Blandit turpis cursus in hac habitasse.",
      ],
    },
  },
  {
    id: 4,
    question: "Will my website be mobile-friendly?",
    answers: {
      title:
        "Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.",
      description: [
        "Mattis nunc sed blandit libero volutpat.",
        "Tortor at risus viverra adipiscing at in tellus.",
        "Purus ut faucibus pulvinar elementum.",
        "Blandit turpis cursus in hac habitasse.",
      ],
    },
  },
  {
    id: 5,
    question: "How long does it take to build a website?",
    answers: {
      title:
        "Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.",
      description: [
        "Mattis nunc sed blandit libero volutpat.",
        "Tortor at risus viverra adipiscing at in tellus.",
        "Purus ut faucibus pulvinar elementum.",
        "Blandit turpis cursus in hac habitasse.",
      ],
    },
  },
];

const questionsList = document.querySelector(".app__content");
let questionRender = "";

questionRender += questions
  .map(
    (question) => `<li class="app__content-item">
          <div class="content-item-heading">
            ${question.id}. ${question.question}
            <span class="content-item-heading__icon">
              <i class="fa-solid fa-plus"></i>
            </span>
          </div>
          <div class="content-item-main">
            <div class="content-item-main__heading">
              ${question.answers.title}
            </div>
            <ul class="content-item-main__text">
              ${question.answers.description
                .map(
                  (answer) =>
                    `<li class="content-item-main__text-item">- ${answer}</li>`
                )
                .join("")}
            </ul>
          </div>
        </li>`
  )
  .join("");

questionsList.innerHTML = questionRender;
