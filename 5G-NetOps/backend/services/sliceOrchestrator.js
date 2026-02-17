import { generateSliceConfig } from "./configManager.js";

const mapping = {
    "UC-01": "SL-01",
    "UC-02": "SL-02",
    "UC-03": "SL-03"
};

export const orchestrateSlices = async (useCases) => {

    const activated = [];

    for (const uc of useCases) {

        const sliceId = mapping[uc];

        const config = generateSliceConfig(sliceId);

        console.log("Applying slice config:", config);

        await new Promise(r => setTimeout(r, 1000));

        activated.push({
            use_case: uc,
            slice_id: sliceId
        });
    }

    return {
        success: true,
        activated,
        test_status: "Triggered"
    };
};
