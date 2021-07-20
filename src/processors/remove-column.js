const process = (columnToRemove) = (data, config) => {
    delete data[columnToRemove];

    return data;
}

export default process;