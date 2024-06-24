# Humanize AI Text SDK

This SDK provides easy access to the [Humanize AI Text](https://humanize-ai-text.ai/docs) API, allowing you to humanize AI-generated text effortlessly.

## Repository

[GitHub Repository](https://github.com/yourusername/humanize-ai-text)

## Installation

You can install the Humanize AI Text SDK using npm, yarn, pnpm, or bun:

### npm

```bash
npm install humanize-ai-text
```

### yarn

```bash
yarn add humanize-ai-text
```

### pnpm

```bash
pnpm add humanize-ai-text
```

### bun

```bash
bun add humanize-ai-text
```

## Features

- Zero dependencies
- TypeScript support
- Simple and easy to use
- Automatic API key loading from environment variable

## Usage

Here's a basic example of how to use the Humanize AI Text SDK:

```typescript
import HumanizedAI from "humanize-ai-text";

// The SDK will automatically use the HUMANIZED_AI_API_KEY environment variable
const humanizer = new HumanizedAI();

// Alternatively, you can pass the API key directly:
// const humanizer = new HumanizedAI({ apiKey: "your-api-key-here" });

async function humanizeText() {
  try {
    const result = await humanizer.run("Your text to humanize goes here.");
    console.log(result.humanizedText);
  } catch (error) {
    console.error(error);
  }
}

humanizeText();
```

## API Key

The SDK will automatically use the `HUMANIZED_AI_API_KEY` environment variable if it's set. This allows you to keep your API key secure and out of your codebase. You can set this variable in your shell or in a `.env` file:

````sh
HUMANIZED_AI_API_KEY=your-api-key-here

## TypeScript Support

This SDK is written in TypeScript and provides full type definitions. You can import and use types in your TypeScript projects:

```typescript
import HumanizedAI, {
  HumanizedResponse,
  HumanizedError,
} from "humanize-ai-text";

const humanizer = new HumanizedAI({ apiKey: "your-api-key-here" });

async function humanizeText(text: string): Promise<HumanizedResponse> {
  try {
    return await humanizer.run(text);
  } catch (error) {
    const humanizedError = error as HumanizedError;
    console.error(`Error ${humanizedError.status}: ${humanizedError.message}`);
    throw error;
  }
}
````

## API Reference

### `new HumanizedAI(options: HumanizedOptions)`

Creates a new instance of the HumanizedAI client.

- `options.apiKey` (required): Your API key for the Humanize AI Text service.
- `options.baseUrl` (optional): The base URL for the API. Defaults to 'https://api.humanize-ai-text.ai/v1'.

### `run(text: string): Promise<HumanizedResponse>`

Humanizes the given text.

- `text`: The text to humanize.

Returns a promise that resolves to a `HumanizedResponse` object:

```typescript
interface HumanizedResponse {
  success: boolean;
  input_words: number;
  output_words: number;
  humanizedText: string;
}
```

## Error Handling

The SDK throws `HumanizedError` for API-related errors. This error includes:

- `message`: A description of the error.
- `status`: The HTTP status code of the error response.
- `response`: The full error response from the API.

Example error handling:

```typescript
import HumanizedAI, { HumanizedError } from "humanize-ai-text";

const humanizer = new HumanizedAI({ apiKey: "your-api-key-here" });

try {
  const result = await humanizer.run("Your text here");
  console.log(result.humanizedText);
} catch (error) {
  if (error instanceof HumanizedError) {
    console.error(`API Error: ${error.message}`);
    console.error(`Status: ${error.status}`);
    console.error(`Response: ${JSON.stringify(error.response)}`);
  } else {
    console.error("An unexpected error occurred:", error);
  }
}
```

## Support

If you have any questions or need help with the SDK, please contact us at [Humanized AI](https://humanize-ai-text.ai).
# humanize-ai-text-npm
