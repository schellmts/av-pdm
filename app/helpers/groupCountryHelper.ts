export const groupByCountry = (data: any[]) => {
    const grouped = data.reduce((result: any, item: any) => {
        if (!result[item.origin]) {
            result[item.origin] = { title: item.origin, data: [] };
        }
        result[item.origin].data.push(item);
        if (!result[item.destination]) {
            result[item.destination] = { title: item.destination, data: [] };
        }
        result[item.destination].data.push(item);

        return result;
    }, {});

    const sortedKeys = Object.keys(grouped).sort();

    const sortedGrouped = sortedKeys.reduce((acc, currentKey) => {
        //@ts-ignore
        acc[currentKey] = grouped[currentKey];
        return acc;
    }, {});

    return sortedGrouped;
};
