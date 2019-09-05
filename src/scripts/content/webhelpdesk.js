'use strict';

togglbutton.render('form[name=ticketForm]', {}, function (elem) {
  const ticketNum = $('.navWidgetLabel a', elem);

  const getDescription = () => {
    return ticketNum.textContent.trim();
  };

  const cont = $('.blueHeader td[align=right]');

  const link = togglbutton.createTimerLink({
    className: 'webhelpdesk',
    description: getDescription,
    projectName: 'Helpdesk'
  });
  cont.appendChild(link);
});
