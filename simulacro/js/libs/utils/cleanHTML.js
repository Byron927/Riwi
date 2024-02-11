//Enviaremos el selector como parámetro y diremos que si el selector tiene un...
//...primer hijo entonces lo va a eliminar, y en caso de que no tenga un primer...
//...hijo no hará nada
export function cleanHTML(selector) {
  if (!selector.firstChild) return;

  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
