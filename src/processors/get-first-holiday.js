export const processor = (data, config) => {
    console.log('get-first-holiday')
    data.firstHoliday = 'First Holiday';

    return data;
}

