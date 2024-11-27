export const groupByCountry = (data: any[], key: keyof typeof data[0]) => {
    return data.reduce((result: any, item: any) => {
        if (!result[item[key]]) {
            result[item[key]] = { title: item[key], data: [] };
        }
        result[item[key]].data.push(item);
        return result;
    }, {});
};
