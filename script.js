const books = {
  shape: {
    title: "Rot With Me",
    type: "NOVEL · 2026",
    cover: "cover-one",
    chapterUrl: "chapters/rot-with-me.html",
    description:
      "In the summer of 1853, Warren arrives in New Orleans to study a deadly epidemic, only to find himself drawn into the unsettling world of a neighbour who seems to know more about death than he should. A dark, atmospheric novel about disease, human nature and the quiet horrors that thrive just beyond the edge of understanding."
  },

  north: {
    title: "The Goodnight Earth",
    type: "NOVEL · 2022",
    cover: "cover-two",
    chapterUrl: "chapters/goodnight-earth.html",
    description:
      "In a vast, lightless factory, two strange mechanical beings spend their days sorting fragments of bodies and arguing over a book that seems to hold the answers to their existence. A surreal, darkly comic tale about identity, dependence and the uneasy question of whether we are ever truly free to choose who we become."
  },

  sea: {
    title: "The Single Point",
    type: "NOVEL · 2021",
    cover: "cover-three",
    chapterUrl: "chapters/single-point.html",
    description:
      "Across a frozen, silent wilderness, two unlikely companions travel towards a distant fortress, bound together by necessity and divided by faith, pride and distrust. When their search for food leads them into the path of something far more dangerous than they imagined, survival becomes a test of both courage and character. A dark fantasy about unlikely companionship, human folly and the horrors hidden within an unfamiliar world."
  },

  light: {
    title: "Wake Up Blood Sucking Demon",
    type: "NOVEL · 2024",
    cover: "cover-four",
    chapterUrl: "chapters/wake-up.html",
    description:
      "From rural farmhouses to the crowded streets of Japan, Griffin recounts a year of strange jobs, lonely winters, unexpected adventures and questionable decisions. Part travel diary, part existential rambling, this irreverent and deeply personal account finds humour in chaos and meaning in the uncertainty of being alive."
  }
};

const params = new URLSearchParams(window.location.search);
const selectedBook = params.get("book");
const book = books[selectedBook];

if (book) {
  document.title = `${book.title} — Griffin Eaves`;

  document.querySelector("#book-title").textContent = book.title;
  document.querySelector("#book-type").textContent = book.type;
  document.querySelector("#book-year").textContent = book.type;
  document.querySelector("#book-description").textContent = book.description;

  const cover = document.querySelector("#book-cover");
  cover.classList.add(book.cover);

  const chapterButton = document.querySelector("#read-chapter");
  chapterButton.href = book.chapterUrl;
}