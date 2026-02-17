export const generateSliceConfig = (sliceId) => {

    const profiles = {
        "SL-01": { sst: 1, sd: "001", priority: "Medium" },
        "SL-02": { sst: 1, sd: "002", priority: "High" },
        "SL-03": { sst: 1, sd: "003", priority: "Very High" }
    };

    return profiles[sliceId];
};
