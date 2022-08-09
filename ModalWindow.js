function ModalWindow(id, w, h) {
    this.id = id;
    this.width = w; this.height = h;

    //шапка окна
    this.top = $('<div/>', { class: 'top' });
    this.close = $('<a/>', { class: 'close', text: 'Закрыть' });
    this.top.append(this.close);

}