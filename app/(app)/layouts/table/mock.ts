import dayjs from 'dayjs';

export const data = Array.from({
  length: 200,
}).map((_, index) => {
  return {
    key: index,
    date: dayjs().format('l LT'),
    type: 'Recurring',
    amount: '+$1.00',
    payment: 'Stripe',
    status: 'Succeeded',
  };
});
