export const processor = (data, config) => {
    data.holidaySentence = `${data.firstName}'s ${data.firstHoliday} comes before ${data.secondHoliday}`;

    return data;
}