function ModalWindow(id, w, h) {
    this.id = id;
    this.width = w; this.height = h;

    //����� ����
    this.top = $('<div/>', { class: 'top' });
    this.close = $('<a/>', { class: 'close', text: '�������' });
    this.top.append(this.close);

}