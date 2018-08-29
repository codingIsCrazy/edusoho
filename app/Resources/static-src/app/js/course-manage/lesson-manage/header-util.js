export const hiddenUnpublishTask = () => {
  cd.onoff({
    el: '.js-switch'
  }).on('change', (value) => {
    let $ele = $('.js-switch');
    const url = $ele.data('url');
    const status = $ele.parent().hasClass('checked') ? 0 : 1;

    cd.confirm({
      title: Translator.trans('site.data.delete_title_hint', { 'name': name }),
      content: Translator.trans('site.data.delete_name_hint', { 'name': name }),
      okText: Translator.trans('site.confirm'),
      cancelText: Translator.trans('site.close'),
    }).on('ok', () => {
      $.post(url, { status: status })
        .success((response) => {
          cd.message({ type: 'success', message: Translator.trans('site.save_success_hint') });
        })
        .error((response) => {
          cd.message({ type: 'danger', message: response.responseJSON.error.message });
        });
    });
  });
};

export const addLesson = () => {
  $('body').on('click', '.js-lesson-create-btn', (event) => {
    const url = $(event.currentTarget).data('url');
    $.get(url, {})
      .success((response) => {
        $('#modal').html('');
        $('#modal').append(response.html);
        $('#modal').modal({ 'backdrop': 'static', 'show': true });
      })
      .error((response) => {
        cd.message({ type: 'danger', message: Translator.trans(response.responseJSON.error.message) });
      });
  });
};