import moment from 'moment';

const getForecastToday = (data, title) => ({
    weekday: moment(data.date).format('dddd'),
    date: moment(data.date).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.day.avgtemp_c),
});
export default getForecastToday;