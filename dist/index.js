"use strict";
// src/index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class HumanizedAI {
    /**
     * Creates an instance of HumanizedAI.
     * @param {HumanizedOptions} options - The options to configure the SDK.
     */
    constructor(options) {
        this.client = axios_1.default.create({
            baseURL: options.baseUrl || "https://api.humanize-ai-text.ai/v1",
            headers: {
                Authorization: `Bearer ${options.apiKey}`,
                "Content-Type": "application/json",
            },
        });
    }
    /**
     * Humanizes the given text.
     * @param {string} text - The text to humanize.
     * @returns {Promise<HumanizedResponse>} The humanized text response.
     * @throws {HumanizedError} If the API request fails.
     */
    run(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post("/humanize", {
                    text,
                });
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response) {
                    const humanizedError = new Error(`Humanized AI Error: ${error.response.data.error}`);
                    humanizedError.status = error.response.status;
                    humanizedError.response = error.response.data;
                    throw humanizedError;
                }
                throw error;
            }
        });
    }
}
exports.default = HumanizedAI;
__exportStar(require("./types"), exports);
