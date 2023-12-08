const isNumber = (data: string): boolean => {
    const regex = /^[0-9\b]+$/;
    return data === '' || regex.test(data);
};

export { isNumber };