$$ = (t) => document.execCommand(t);
Copy = (t) => {
  $(t).select();
  $$('copy');
}
Empty = (t) => {
  x = $(t);
  x.value = "";
  x.focus();
}
