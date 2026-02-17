import { orchestrateSlices } from "../services/sliceOrchestrator.js";

export const activateUseCases = async (req, res) => {

    const { use_cases } = req.body;

    if (!use_cases || use_cases.length === 0) {
        return res.status(400).json({ error: "No use cases selected" });
    }

    const result = await orchestrateSlices(use_cases);

    res.json(result);
};
