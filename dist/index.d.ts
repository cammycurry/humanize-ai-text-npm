import { HumanizedOptions, HumanizedResponse } from "./types";
declare class HumanizedAI {
    private client;
    /**
     * Creates an instance of HumanizedAI.
     * @param {HumanizedOptions} options - The options to configure the SDK.
     */
    constructor(options: HumanizedOptions);
    /**
     * Humanizes the given text.
     * @param {string} text - The text to humanize.
     * @returns {Promise<HumanizedResponse>} The humanized text response.
     * @throws {HumanizedError} If the API request fails.
     */
    run(text: string): Promise<HumanizedResponse>;
}
export default HumanizedAI;
export * from "./types";
