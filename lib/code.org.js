export const onEvent = (id, event, fn) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(event, fn, false);
  }
};

export const showElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("hidden");
  }
};
export const hideElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("hidden");
  }
};

let beforeScreen = "screenMaker";
export const setScreen = (id) => {
  hideElement(beforeScreen);
  showElement(id);
  beforeScreen = id;
};

export const getDateValue = (id, value) => {
  let field = document.querySelector(id);
  if (field) {
    let date = new Date(field.value);
    return date;
  }
};

export const trackProperty = (id, prop, fn) => {
  const el = document.getElementById(id).addEventListener("change", fn);
  if (el) {
    return el[prop];
  }
};

export const getProperty = (id, prop) => {
  const el = document.getElementById(id);
  if (el) {
    return el[prop];
  }
};

export const setProperty = (id, prop, value) => {
  const el = document.getElementById(id);
  if (el) {
    el[prop] = value;
  }
};

export const setImageURL = (id, src) => {
  const el = document.getElementById(id);
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/${src}?t=1670932317000`;

  if (el) {
    el.setAttribute("src", url);
  }
};

export function setContent(id, content) {
  document.getElementById(id).innerHTML = content;
}

export function setBackground(color) {
  document.body.style.backgroundColor = color;
}
